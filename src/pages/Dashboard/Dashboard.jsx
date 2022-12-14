// import components

import HomeTab from 'components/HomeTab/HomeTab';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency/Currency';
import Loader from 'components/Loader/Loader';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalTransactions from '../AddTransactions/ModalTransactions/ModalTransactions';
// import Eli1 from 'images/Ellipse1.png'

// redux/react
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refresh } from 'redux/session/session-operations';
import globalSelectors from 'redux/global/global-selectors';
import financeOperations from 'redux/finance/finance-operations';
import { toggleCurrencyView } from 'redux/global/global-slice';

// import styled components
import {
  CurrencyWrapper,
  DashboardContainer,
  DashboardWrapper,
  HomeInfo,
  NavBalWrapper,
  InfoContainer,
  // Elips1,
} from './Dashboard.styled';
import financeSelectors from 'redux/finance/finance-selectors';

export default function Dashboard() {
  const dispatch = useDispatch();
  const viewCurrency = useSelector(globalSelectors.getIsCurrencyView);

  const isLoading = useSelector(globalSelectors.getIsLoading);
  const isModalAddTransactionOpen = useSelector(
    globalSelectors.getIsModalAddTransaction
  );

  const balance = useSelector(financeSelectors.getTotalBalance);

  useEffect(() => {
    dispatch(financeOperations.refreshTransactions());
    dispatch(refresh());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch, balance]);

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
      dispatch(toggleCurrencyView(false));
    }
  });

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
                // setViewCurrency={setViewCurrency}
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
          {/* <Elips1 src={Eli1} /> */}
        </DashboardWrapper>
      )}

      {!LOADING && VIEW_CURRENCY && (
        <DashboardWrapper>
          <Navigation
            // setViewCurrency={setViewCurrency}
            viewCurrency={viewCurrency}
          />
          <Currency />
        </DashboardWrapper>
      )}

      {!LOADING && isModalAddTransactionOpen && <ModalTransactions />}
    </DashboardContainer>
  );
}
