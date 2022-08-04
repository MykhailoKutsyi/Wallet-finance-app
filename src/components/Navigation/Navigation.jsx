// components
import Icon from 'components/Icon/Icon';
import Media from 'react-media';

// styled-components
import {
  NavButton,
  NavContainer,
  Text,
  IconWrapper,
} from './Navigation.styled';

const Navigation = ({ setViewCurrency, viewCurrency }) => {
  const handleClick = () => {
    if (viewCurrency) {
      return;
    } else {
      setViewCurrency(true);
    }
  };

  return (
    <NavContainer>
      <NavButton to="/home" onClick={() => setViewCurrency(false)}>
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

      <NavButton to="/diagram" onClick={() => setViewCurrency(false)}>
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

      <Media queries={{ mobile: '(max-width: 767px)' }}>
        {matches =>
          matches.mobile && (
            <>
              <NavButton to="/home" onClick={handleClick}>
                <IconWrapper>
                  <Icon id={'#icon-currency-mobile'} width={38} height={38} />
                </IconWrapper>
              </NavButton>
            </>
          )
        }
      </Media>

      {/* <button type="button" onClick={handleClick}>
        <IconWrapper>
          <Icon id={'#icon-currency-mobile'} width={38} height={38} />
        </IconWrapper>
      </button> */}
    </NavContainer>
  );
};

export default Navigation;
