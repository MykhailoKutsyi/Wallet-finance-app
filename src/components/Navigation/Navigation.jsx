// components
// import { ReactComponent as HomeIcon } from '../../images/sprite.svg#icon-home';
import Icon from 'components/Icon/Icon';
import Media from 'react-media';

// styled-components
import {
  NavButton,
  NavContainer,
  Text,
  IconWrapper,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <NavContainer>
      <NavButton to="/home">
        <IconWrapper>
          <Media query="(max-width: 767px)">
            <Icon id={'#icon-home-mobile'} width={38} height={38} />
          </Media>
          <Media query="(min-width: 768px)">
            <Icon id={'#icon-home-mobile'} width={18} height={18} />
          </Media>
        </IconWrapper>
        <Text>Home</Text>
      </NavButton>

      <NavButton to="/diagram">
        <IconWrapper>
          <Media query="(max-width: 767px)">
            <Icon id={'#icon-statistics'} width={38} height={38} />
          </Media>
          <Media query="(min-width: 768px)">
            <Icon id={'#icon-statistics'} width={18} height={18} />
          </Media>
        </IconWrapper>
        <Text>Statistic</Text>
      </NavButton>

      <NavButton to="/currency">
        <IconWrapper>
          <Icon id={'#icon-currency-mobile'} width={38} height={38} />
        </IconWrapper>
      </NavButton>
    </NavContainer>
  );
};

export default Navigation;
