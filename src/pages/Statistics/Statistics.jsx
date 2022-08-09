import { useState, useEffect } from 'react';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import Balance from 'components/Balance/Balance.jsx';
import Currency from 'components/Currency/Currency.jsx';
import Navigation from 'components/Navigation/Navigation.jsx';
import DiagramTab from 'components/DiagramTab/DiagramTab.jsx';
// import Eli1 from 'images/Ellipse1.png'
import {
  CurrencyWrapper,
  HomeInfo,
  NavBalWrapper,
  // Elips1,
} from '../Dashboard/Dashboard.styled';
import { AsideWrapper } from './Statistics.styled.js';

export default function Statistics() {
  const [viewCurrency, setViewCurrency] = useState(false);
  const [viewBalance, setViewBalance] = useState(true);

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      setViewCurrency(false);
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth < 768) {
      setViewBalance(false);
    } else {
      setViewBalance(true);
    }
  });

  useEffect(() => {}, [viewCurrency, viewBalance]);
  const VIEW_BALANCE = viewBalance === true;

  return (
    <AsideWrapper>
      <HomeInfo>
        <NavBalWrapper>
          <Navigation
            setViewCurrency={setViewCurrency}
            viewCurrency={viewCurrency}
          />
          {VIEW_BALANCE && 
          <Balance />}
        </NavBalWrapper>
        <CurrencyWrapper>
          <Currency />
        </CurrencyWrapper>
      </HomeInfo>
      <DiagramTab />
    </AsideWrapper>
  );
}
