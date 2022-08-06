// libs
import Media from 'react-media';

// import components

import HomeTab from 'components/HomeTab/HomeTab';
import Navigation from 'components/Navigation/Navigation';
import AppBar from 'components/AppBar/AppBar';
import Balance from 'components/Balance';
import Currency from 'components/Currency/Currency';
import Loader from 'components/Loader/Loader';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';

// redux/react
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refresh } from 'redux/session/session-operations';
import sessionSelectors from 'redux/session/session-selectors';
import globalSelectors from 'redux/global/global-selectors';
import { getCurrentTransactions } from 'redux/finance/finance-operations';

// import styled components
import {
  CurrencyWrapper,
  DashboardContainer,
  DashboardWrapper,
  HomeInfo,
  NavBalWrapper,
  InfoContainer,
} from './Dashboard.styled';

export default function Dashboard() {
  const dispatch = useDispatch();

  const [viewCurrency, setViewCurrency] = useState(false);
  const isLoading = useSelector(globalSelectors.getIsLoading);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCurrentTransactions());
  }, []);

  // const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      setViewCurrency(false);
    }
  });

  const user = useSelector(state => state.session.user);
  // const user = sessionSelectors.getUser(); // don't work (state in selector is undefined)
  console.log(user);

  useEffect(() => {
    console.log(viewCurrency);
  }, [viewCurrency]);

  // 1. Взять id текущего пользователя через селектор -
  // 2. Сделать запрос за балансом текущего пользователя и записать баланс в state.finance.balance +
  // 3. Сделать запрос за транзакциями текщуего пользователя и записать их в state.finance.data +

  const VIEW_CURRENCY = viewCurrency === true;
  const VIEW_HOME = viewCurrency === false;
  const LOADING = isLoading === true;
  return (
    <DashboardContainer>
      {LOADING && (
        <InfoContainer>
          <Loader />
        </InfoContainer>
      )}
      {!LOADING && VIEW_HOME && (
        <DashboardWrapper>
          <HomeInfo>
            <NavBalWrapper>
              <Navigation
                setViewCurrency={setViewCurrency}
                viewCurrency={viewCurrency}
              />
              <Balance />
            </NavBalWrapper>
            <CurrencyWrapper>
              <Currency />
            </CurrencyWrapper>
          </HomeInfo>
          <HomeTab />
          <ButtonAddTransactions />
        </DashboardWrapper>
      )}
      <Media queries={{ mobile: '(max-width: 767px)' }}>
        {matches =>
          matches.mobile &&
          !LOADING &&
          VIEW_CURRENCY && (
            <DashboardWrapper>
              <Navigation
                setViewCurrency={setViewCurrency}
                viewCurrency={viewCurrency}
              />
              <Currency />
            </DashboardWrapper>
          )
        }
      </Media>
    </DashboardContainer>
  );
}
