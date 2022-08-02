import {
  Data,
  LineSide,
  Text,
  Transaction,
  TransactionField,
} from './HomeTab.styled';

const transactions = [
  {
    id: '00000001',
    date: '04.01.19',
    type: '-',
    category: 'Other',
    comment: 'Gift for your wife',
    sum: 300.0,
    balance: 6900.0,
  },
  {
    id: '00000002',
    date: '05.01.19',
    type: '-',
    category: 'Car',
    comment: 'Maintenance',
    sum: 600.0,
    balance: 6300.0,
  },
  {
    id: '00000003',
    date: '07.01.19',
    type: '-',
    category: 'Products',
    comment: 'Buy products',
    sum: 500.0,
    balance: 5800.0,
  },
];

const HomeTab = () => {
  return (
    <div>
      <ul>
        {transactions.map(
          ({ id, date, type, category, comment, sum, balance }) => (
            <Transaction key={id}>
              <TransactionField>
                <LineSide />
                <Text>Date</Text>
                <Data>{date}</Data>
              </TransactionField>

              <TransactionField>
                <LineSide />
                <Text>Type</Text>
                <Data>{type}</Data>
              </TransactionField>

              <TransactionField>
                <LineSide />
                <Text>Category</Text>
                <Data>{category}</Data>
              </TransactionField>

              <TransactionField>
                <LineSide />
                <Text>Comment</Text>
                <Data>{comment}</Data>
              </TransactionField>

              <TransactionField>
                <LineSide />
                <Text>Sum</Text>
                <Data>{sum}</Data>
              </TransactionField>

              <TransactionField>
                <LineSide />
                <Text>Balance</Text>
                <Data>{balance}</Data>
              </TransactionField>
            </Transaction>
          )
        )}
      </ul>
    </div>
  );
};

export default HomeTab;
