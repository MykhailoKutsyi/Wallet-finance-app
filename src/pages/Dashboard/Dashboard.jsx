// import components

// import Currency from 'components/Currency/Currency';
import HomeTab from 'components/HomeTab/HomeTab';
import Navigation from 'components/Navigation/Navigation';
import Icon from 'components/Icon/Icon';

// import styled components
import {
  AddButton,
  DashboardContainer,
  DashboardWrapper,
} from './Dashboard.styled';

// temporary templates
const appBarStyles = {
  width: '320px',
  height: '60px',
  marginBottom: '7px',
  padding: '0',

  background:
    'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
};

const balanceStyles = {
  width: '280px',
  height: '80px',

  borderRadius: '30px',

  background:
    'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',

  marginBottom: '32px',
};

// temporary templates

export default function Dashboard() {
  return (
    <DashboardContainer>
      <div className="appBar" style={appBarStyles}></div>

      <DashboardWrapper>
        <Navigation />
        <div className="balance" style={balanceStyles}></div>
        <HomeTab />
      </DashboardWrapper>
      <AddButton>
        <Icon id={'#icon-plus'} width={20} height={20} />
      </AddButton>
    </DashboardContainer>
  );
}
