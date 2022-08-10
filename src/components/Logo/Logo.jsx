import { useDispatch } from 'react-redux';
import { toggleCurrencyView } from 'redux/global/global-slice';
import sprite from '../../images/sprite.svg';
import {
  LogoWrapper,
  LogoIconWrapper,
  LogoSpan,
  LogoLink,
} from './Logo.styled';

const Logo = () => {
  const dispatch = useDispatch();
  return (
    <LogoWrapper>
      <LogoLink to="/home" onClick={dispatch(toggleCurrencyView(false))}>
        <LogoIconWrapper>
          <use href={`${sprite}#icon-wallet`} />
        </LogoIconWrapper>
        <LogoSpan>Wallet</LogoSpan>
      </LogoLink>
    </LogoWrapper>
  );
};

export default Logo;
