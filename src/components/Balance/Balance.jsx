import { BalanceBox, BalanceTitle, BalanceValue } from './Balance.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import financeOperations from 'redux/finance/finance-operations';
// import globalSelectors from 'redux/finance/finance-selectors';

export default function Balance() {
  // const dispatch = useDispatch();
  // const totalBalance = useSelector(globalSelectors.getTotalBalance);

  // useEffect(() => {
  //   dispatch(financeOperations.totalBalance()); // ???
  // }, [dispatch]);

  return (
    <BalanceBox>
      <BalanceTitle>Your balance</BalanceTitle>
      <BalanceValue>₴ {24000.0}</BalanceValue>
    </BalanceBox>
  );
}
