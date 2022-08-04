// styled components
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

const transactions = [
  {
    id: '00000001',
    date: '04.01.19',
    type: '+',
    category: 'Other',
    comment:
      'Gift for your wife. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, voluptates.',
    sum: '300.00',
    balance: '6900.00',
  },

  {
    id: '00000002',
    date: '05.01.19',
    type: '-',
    category: 'Car',
    comment: 'Maintenance',
    sum: '600.00',
    balance: '6300.00',
  },
  {
    id: '00000003',
    date: '07.01.19',
    type: '-',
    category: 'Products',
    comment: 'Buy products',
    sum: '5000000.00',
    balance: ' 5800000.00',
  },
];

const HomeTab = () => {
  return (
    <Transactions>
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
    </Transactions>
  );
};

export default HomeTab;
