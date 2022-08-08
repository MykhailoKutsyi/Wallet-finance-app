// import components

import HomeTab from 'components/HomeTab/HomeTab';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency/Currency';
import Loader from 'components/Loader/Loader';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalTransactions from '../AddTransactions/ModalTransactions/ModalTransactions';

// redux/react
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refresh } from 'redux/session/session-operations';
import globalSelectors from 'redux/global/global-selectors';
import financeOperations from 'redux/finance/finance-operations';

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
  const isModalAddTransactionOpen = useSelector(
    globalSelectors.getIsModalAddTransaction
  );

  useEffect(() => {
    dispatch(financeOperations.refreshTransactions());
    dispatch(refresh());
  }, [dispatch]);

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      setViewCurrency(false);
    }
  });

  useEffect(() => {}, [viewCurrency]);

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

      {!LOADING && VIEW_CURRENCY && (
        <DashboardWrapper>
          <Navigation
            setViewCurrency={setViewCurrency}
            viewCurrency={viewCurrency}
          />
          <Currency />
        </DashboardWrapper>
      )}

      {!LOADING && isModalAddTransactionOpen && <ModalTransactions />}
    </DashboardContainer>
  );
}
