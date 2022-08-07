// libs
import Icon from 'components/Icon/Icon';
import Spinner from 'components/Loader/Loader';
import { useEffect, useState } from 'react';

// styled components
import {
  BodyItem,
  BodyRow,
  HeadItem,
  HeadRow,
  Info,
  InfoButton,
  InfoText,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from './Currency.styled';

const Currency = () => {
  const [rate, setRate] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const lastQueryRate = localStorage.getItem('lastQueryRate');
    const oldRate = localStorage.getItem('oldRate');
    const currentDate = Date.now();

    // If no date of last request
    if (!lastQueryRate || !oldRate) {
      exchangeQuery();
      localStorage.setItem('lastQueryRate', currentDate);
      return;
    }

    // If there is a date, but it's out of date
    const difference = currentDate - lastQueryRate;
    if (lastQueryRate && difference > 3600000) {
      exchangeQuery();
      localStorage.setItem('lastQueryRate', currentDate);
      return;
    }

    // If there is a date and it is still relevant
    if (difference < 3600000 && !error && !rate) {
      setRate(JSON.parse(oldRate));
      return;
    }
  }, [error, rate]);

  async function exchangeQuery() {
    setLoading(true);

    await fetch(
      'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
    )
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('oldRate', JSON.stringify(res));
        setRate(res);
        setError(false);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
      });
  }

  return (
    <TableContainer>
      {error && !loading && (
        <Info>
          <Icon
            id={'#icon-warning'}
            width={50}
            height={50}
            color={'rgb(218,8,204)'}
          />
          <InfoText>
            Sorry, the exchange rate service is temporarily unavailable.
          </InfoText>
          <InfoButton type="button" onClick={() => exchangeQuery()}>
            <Icon
              id={'#icon-update-currency'}
              width={30}
              height={30}
              color={'#00fff2'}
            />
          </InfoButton>
        </Info>
      )}

      {!error && loading && (
        <Info>
          <Spinner />
        </Info>
      )}

      {!error && !loading && (
        <Table>
          <TableHead>
            <HeadRow>
              <HeadItem>Currency</HeadItem>
              <HeadItem>Purchase</HeadItem>
              <HeadItem>Sale</HeadItem>
            </HeadRow>
          </TableHead>
          <TableBody>
            {rate &&
              !error &&
              rate.map(({ ccy, base_ccy, buy, sale }) => (
                <BodyRow key={`${ccy}_id`}>
                  <BodyItem>{ccy}</BodyItem>
                  <BodyItem>
                    {base_ccy === 'USD'
                      ? Math.ceil(buy * rate[0].buy)
                      : Math.ceil(buy).toFixed(2)}
                  </BodyItem>
                  <BodyItem>
                    {base_ccy === 'USD'
                      ? Math.ceil(sale * rate[0].buy)
                      : Math.ceil(sale).toFixed(2)}
                  </BodyItem>
                </BodyRow>
              ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default Currency;
