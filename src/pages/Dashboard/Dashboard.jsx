// libs
// import Media from 'react-media';

// import components

import HomeTab from 'components/HomeTab/HomeTab';
import Navigation from 'components/Navigation/Navigation';
import AppBar from 'components/AppBar/AppBar';
import Balance from 'components/Balance';
import Currency from 'components/Currency/Currency';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';

// import styled components
import {
  CurrencyWrapper,
  DashboardContainer,
  DashboardWrapper,
  HomeInfo,
  NavBalWrapper,
} from './Dashboard.styled';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import financeOperations from 'redux/finance/finance-operations';
import sessionSelectors from 'redux/session/session-selectors';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [viewCurrency, setViewCurrency] = useState(false);

  const user = useSelector(state => state.session.user);
  // const user = sessionSelectors.getUser(); // don't work (state in selector is undefined)
  console.log(user);

  useEffect(() => {
    console.log(viewCurrency);
  }, [viewCurrency]);

  // 1. Взять id текущего пользователя через селектор -
  // 2. Сделать запрос за балансом текущего пользователя и записать баланс в state.finance.balance +
  // 3. Сделать запрос за транзакциями текщуего пользователя и записать их в state.finance.data +

  const getTransactions = async () => {
    await dispatch(
      financeOperations.getCurrentTransactions('${currentUser.id}')
    ); // Сюда нужно передать id текущего пользователя, которого я беру через селектор в session slice
  };

  const getBalance = async () => {
    await dispatch(financeOperations.getTotalBalance());
  };

  useEffect(() => {
    getTransactions();
    getBalance();
  }, [dispatch]);

  // const VIEW_CURRENCY = viewCurrency === true;
  // const VIEW_HOME = viewCurrency === false;

  // Добавить медиа правило!

  return (
    // <div style={stylesTest}>
    // {/* <AppBar /> */}
    <DashboardContainer>
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
    </DashboardContainer>
    // </div>
  );
}
