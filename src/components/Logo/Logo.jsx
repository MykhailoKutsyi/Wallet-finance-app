import sprite from '../../images/sprite.svg';
import {
  LogoWrapper,
  LogoIconWrapper,
  LogoSpan,
  LogoLink,
} from './Logo.styled';

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoLink to="/home">
        <LogoIconWrapper>
          <use href={`${sprite}#icon-wallet`} />
        </LogoIconWrapper>
        <LogoSpan>Wallet</LogoSpan>
      </LogoLink>
    </LogoWrapper>
  );
};

export default Logo;
