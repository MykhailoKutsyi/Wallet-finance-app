// components
// import { ReactComponent as HomeIcon } from '../../images/sprite.svg#icon-home';
import Icon from 'components/Icon/Icon';

// styled-components
import { NavButton, NavContainer } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavContainer>
      <NavButton to="/home">
        <Icon id={'#icon-home-mobile'} width={38} height={38} />
      </NavButton>
      <NavButton to="/diagram">
        <Icon id={'#icon-statistics'} width={38} height={38} />
      </NavButton>
      <NavButton to="/currency">
        <Icon id={'#icon-currency-mobile'} width={38} height={38} />
      </NavButton>
    </NavContainer>
  );
};

export default Navigation;
