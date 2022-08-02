// import components

// import Currency from 'components/Currency/Currency';
import HomeTab from 'components/HomeTab/HomeTab';
import Navigation from 'components/Navigation/Navigation';
import Icon from 'components/Icon/Icon';
import AppBar from 'components/AppBar/AppBar';

// import styled components
import {
  AddButton,
  BalanceTemplate,
  CurrencyWrapper,
  DashboardContainer,
  DashboardWrapper,
  HomeInfo,
  NavBalWrapper,
} from './Dashboard.styled';

export default function Dashboard() {
  return (
    <div>
      <AppBar />
      <DashboardContainer>
        <DashboardWrapper>
          <HomeInfo>
            <NavBalWrapper>
              <Navigation />
              <BalanceTemplate />
            </NavBalWrapper>
            <CurrencyWrapper>
              <Currency />
            </CurrencyWrapper>
          </HomeInfo>
          <HomeTab />
        </DashboardWrapper>
        <AddButton>
          <Icon id={'#icon-plus'} width={20} height={20} />
        </AddButton>
      </DashboardContainer>
    </div>
  );
}
