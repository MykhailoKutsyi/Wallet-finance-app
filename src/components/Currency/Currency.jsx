// libs
import axios from 'axios';
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
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from './Currency.styled';

const Currency = ({ dollarExchangeRate }) => {
  const [rate, setRate] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const lastQueryRate = localStorage.getItem('lastQueryRate');
    const oldRate = localStorage.getItem('oldRate');
    const currentDate = Date.now();

    // Если нету даты последнего запроса
    if (!lastQueryRate && !oldRate) {
      exchangeQuery();
      console.log('No data in local storage. Request...');
      localStorage.setItem('lastQueryRate', currentDate);
      return;
    }

    // Если дата есть и она устарела
    const difference = currentDate - lastQueryRate;
    if (lastQueryRate && difference > 3600000) {
      console.log('There is a date, but it is outdated. Request...');
      exchangeQuery();
      localStorage.setItem('lastQueryRate', currentDate);
      return;
    }

    // Если дата есть и она ещё акутальна
    if (difference < 3600000) {
      console.log(
        'Date is actually. Take the data from local storage.',
        difference
      );
      setRate(JSON.parse(oldRate));
      return;
    }
  }, []);

  useEffect(() => {
    let timer;
    if (error === true) {
      timer = setInterval(() => {
        exchangeQuery();
      }, 3000);
    } else {
      clearInterval(timer);
      return;
    }
  }, [error]);

  async function exchangeQuery() {
    setLoading(true);
    await axios
      .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then(res => {
        console.log(res);
        // setTimeout(() => {
        console.log(res.data);
        localStorage.setItem('oldRate', JSON.stringify(res.data));
        setRate(res.data);

        setError(false);
        setLoading(false);
        // }, 2000);
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
          <h4>Sorry, the exchange rate service is temporarily unavailable.</h4>
        </Info>
      )}

      {!error && loading && (
        <Info>
          <Spinner />
        </Info>
      )}

      {!error && !loading && (
        // {error && (
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
