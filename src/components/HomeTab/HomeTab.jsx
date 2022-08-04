// libs
// import moment from 'moment';

// styled components
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import financeOperations from 'redux/finance/finance-operations';
import financeSelectors from 'redux/finance/finance-selectors';
import sessionSelectors from 'redux/session/session-selectors';

import {
  LineSide,
  Transaction,
  Transactions,
  TransactionField,
  Data,
  Text,
  TransactionHead,
  HeadRow,
  HeadItem,
  DataWrapper,
} from './HomeTab.styled';

const HomeTab = () => {
  const dispatch = useDispatch();
  const user = useSelector(sessionSelectors.getUser);

  useEffect(() => {
    dispatch(financeOperations.getCurrentTransactions(user.id)); // request to transactions by user id
    console.log('request');
  }, [user, dispatch]);

  let transactions = useSelector(financeSelectors.getCurrentTransactions); // redux state => state.finance.data

  // const sortedArray =
  //   transactions ??
  //   transactions.sort((a, b) =>
  //     moment(a.date, 'DD.MM.YY').diff(moment(b.date, 'DD.MM.YY'))
  //   );

  return (
    <Transactions>
      {transactions.length < 0 && (
        <h4>
          Your transactions will be displayed here. They don't exist yet...
        </h4>
      )}
      {transactions.length > 0 && (
        <table>
          <TransactionHead>
            <HeadRow>
              <HeadItem>Date</HeadItem>
              <HeadItem>Type</HeadItem>
              <HeadItem>Category</HeadItem>
              <HeadItem>Comment</HeadItem>
              <HeadItem>Sum</HeadItem>
              <HeadItem>Balance</HeadItem>
            </HeadRow>
          </TransactionHead>
          {transactions &&
            transactions.map(
              ({ id, date, type, category, comment, sum, balance }) => {
                const color = type === '-' ? '#ff6596' : '#24cca7';
                return (
                  <Transaction key={id}>
                    <TransactionField>
                      <LineSide color={color} />
                      <Text>Date</Text>
                      <DataWrapper>
                        <Data text={date} length={8} />
                      </DataWrapper>
                    </TransactionField>
                    <TransactionField>
                      <LineSide color={color} />
                      <Text>Type</Text>
                      <DataWrapper>
                        <Data text={type} length={1} />
                      </DataWrapper>
                    </TransactionField>
                    <TransactionField>
                      <LineSide color={color} />
                      <Text>Category</Text>
                      <DataWrapper>
                        <Data text={category} length={8} />
                      </DataWrapper>
                    </TransactionField>
                    <TransactionField>
                      <LineSide color={color} />
                      <Text>Comment</Text>
                      <DataWrapper>
                        <Data text={comment} length={15} />
                      </DataWrapper>
                    </TransactionField>
                    <TransactionField>
                      <LineSide color={color} />
                      <Text>Sum</Text>
                      <DataWrapper>
                        <Data color={color} text={sum} length={10} />
                      </DataWrapper>
                    </TransactionField>
                    <TransactionField>
                      <LineSide color={color} />
                      <Text>Balance</Text>
                      <DataWrapper>
                        <Data text={balance} length={12} />
                      </DataWrapper>
                    </TransactionField>
                  </Transaction>
                );
              }
            )}
        </table>
      )}
    </Transactions>
  );
};

export default HomeTab;
