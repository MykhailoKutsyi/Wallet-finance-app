import { BalanceBox, BalanceTitle, BalanceValue } from './Balance.styled';
import { useSelector } from 'react-redux';
import sessionSelectors from 'redux/session/session-selectors';

export default function Balance() {
  const { balance } = useSelector(sessionSelectors.getUser);
  return (
    <BalanceBox>
      <BalanceTitle>Your balance</BalanceTitle>
      <BalanceValue>₴ {balance}</BalanceValue>
    </BalanceBox>
  );
}
