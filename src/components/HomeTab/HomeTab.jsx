// libs
import moment from 'moment'; // for formating array of transactions
import { useEffect } from 'react';
import { useState } from 'react';

// styled components
import { useSelector } from 'react-redux';
import financeSelectors from 'redux/finance/finance-selectors';

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
  const transactions = useSelector(financeSelectors.getCurrentTransactions); // redux state => state.finance.data
  const [sortTransactions, setSortTransactions] = useState([]);

  // sort transactions
  useEffect(() => {
    if (transactions.length !== 0) {
      const copyTransactionsForSort = [...transactions];
      setSortTransactions(
        copyTransactionsForSort.sort(
          (a, b) => +moment(b.date, 'DD.MM.YY') - +moment(a.date, 'DD.MM.YY')
        )
      );
    }
  }, [transactions]);

  const NO_TRASACTIONS = sortTransactions.length === 0;

  return (
    <Transactions>
      {NO_TRASACTIONS && (
        <h4>
          Your transactions will be displayed here. They don't exist yet...
        </h4>
      )}
      {!NO_TRASACTIONS > 0 && (
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
          {sortTransactions.map(
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
