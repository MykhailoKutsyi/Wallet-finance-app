import { BalanceBox, BalanceTitle, BalanceValue } from './Balance.styled';

export default function Balance() {
  return (
    <BalanceBox>
      <BalanceTitle>Your balance</BalanceTitle>
      <BalanceValue>₴ {24000.0}</BalanceValue>
    </BalanceBox>
  );
}
