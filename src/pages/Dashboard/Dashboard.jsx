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

const stylesTest = {
  backgroundColor: '#707070a6f',
};

export default function Dashboard() {
  const [viewCurrency, setViewCurrency] = useState(false);

  useEffect(() => {
    console.log(viewCurrency);
  }, [viewCurrency]);

  // useEffect(() => {
  //   window.addEventListener('resize', console.log(window.screen.availWidth));
  //   return () => {
  //     // window.removeEventListener('resize');
  //   };
  // }, [window.screen.availWidth]);

  // const [windowSize, setWindowSize] = useState(window.innerWidth);

  // const handleWindowResize = useCallback(event => {
  //   setWindowSize(window.innerWidth);
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('resize', handleWindowResize);

  //   if (windowSize > 767) {
  //     setViewCurrency(false);
  //   }
  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize);
  //   };
  // }, [handleWindowResize]);

  const VIEW_CURRENCY = viewCurrency === true;
  const VIEW_HOME = viewCurrency === false;

  // Добавить медиа правило!

  return (
    <div style={stylesTest}>
      <AppBar />
      <DashboardContainer>
        {VIEW_HOME && (
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

        {VIEW_CURRENCY && (
          <>
            <Navigation />
            <Currency />
          </>
        )}
      </DashboardContainer>
    </div>
  );
}
