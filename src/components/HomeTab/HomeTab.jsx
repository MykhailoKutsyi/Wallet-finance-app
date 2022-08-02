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
} from './HomeTab.styled';

const transactions = [
  {
    id: '00000001',
    date: '04.01.19',
    type: '+',
    category: 'Other',
    comment: 'Gift for your wife',
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
    sum: '500.00',
    balance: ' 5800.00',
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
                    <Data>{date}</Data>
                  </TransactionField>
                  <TransactionField>
                    <LineSide color={color} />
                    <Text>Type</Text>
                    <Data>{type}</Data>
                  </TransactionField>
                  <TransactionField>
                    <LineSide color={color} />
                    <Text>Category</Text>
                    <Data>{category}</Data>
                  </TransactionField>
                  <TransactionField>
                    <LineSide color={color} />
                    <Text>Comment</Text>
                    <Data>{comment}</Data>
                  </TransactionField>
                  <TransactionField>
                    <LineSide color={color} />
                    <Text>Sum</Text>
                    <Data color={color}>{sum}</Data>
                  </TransactionField>
                  <TransactionField>
                    <LineSide color={color} />
                    <Text>Balance</Text>
                    <Data>{balance}</Data>
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

// <ul>
// {transactions.map(
//   ({ id, date, type, category, comment, sum, balance }) => (
//     <Transaction key={id}>
//       <TransactionField>
//         <LineSide />
//         <Text>Date</Text>
//         <Data>{date}</Data>
//       </TransactionField>

//       <TransactionField>
//         <LineSide />
//         <Text>Type</Text>
//         <Data>{type}</Data>
//       </TransactionField>

//       <TransactionField>
//         <LineSide />
//         <Text>Category</Text>
//         <Data>{category}</Data>
//       </TransactionField>

//       <TransactionField>
//         <LineSide />
//         <Text>Comment</Text>
//         <Data>{comment}</Data>
//       </TransactionField>

//       <TransactionField>
//         <LineSide />
//         <Text>Sum</Text>
//         <Data>{sum}</Data>
//       </TransactionField>

//       <TransactionField>
//         <LineSide />
//         <Text>Balance</Text>
//         <Data>{balance}</Data>
//       </TransactionField>
//     </Transaction>
//   )
// )}
// </ul>
