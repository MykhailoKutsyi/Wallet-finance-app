import {
  //div:
  // CurrencyContainer,
  // CurrencyHead,
  // CurrencyBody,
  // HeadItem,
  // BodyList,
  // BodyItem,
  // ItemData,

  //table:
  BodyItem,
  BodyRow,
  HeadItem,
  HeadRow,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from './Currency.styled';

const templateDollarExchange = [
  {
    currency: 'USD',
    purchase: '27.55',
    sale: '27.66',
  },
  {
    currency: 'EUR',
    purchase: '30.00',
    sale: '30.10',
  },
  {
    currency: 'RUB',
    purchase: '00.00',
    sale: '00.00',
  },
];

const Currency = ({ dollarExchangeRate }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <HeadRow>
            <HeadItem>Currency</HeadItem>
            <HeadItem>Purchase</HeadItem>
            <HeadItem>Sale</HeadItem>
          </HeadRow>
        </TableHead>
        <TableBody>
          {templateDollarExchange.map(item => (
            <BodyRow key={`${item.currency}_id`}>
              <BodyItem>{item.currency}</BodyItem>
              <BodyItem>{item.purchase}</BodyItem>
              <BodyItem>{item.sale}</BodyItem>
            </BodyRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Currency;

// TABLE:
// <TableContainer>
//   <Table>
//     <TableHead>
//       <HeadRow>
//         <HeadItem>Currency</HeadItem>
//         <HeadItem>Purchase</HeadItem>
//         <HeadItem>Sale</HeadItem>
//       </HeadRow>
//     </TableHead>
//     <TableBody>
//       {templateDollarExchange.map(item => (
//         <BodyRow key={`${item.currency}_id`}>
//           <BodyItem>{item.currency}</BodyItem>
//           <BodyItem>{item.purchase}</BodyItem>
//           <BodyItem>{item.sale}</BodyItem>
//         </BodyRow>
//       ))}
//     </TableBody>
//   </Table>
// </TableContainer>

//DIV
// <CurrencyContainer>
//   <CurrencyHead>
//     <HeadItem>Currency</HeadItem>
//     <HeadItem>Purchase</HeadItem>
//     <HeadItem>Sale</HeadItem>
//   </CurrencyHead>
//   <CurrencyBody>
//     <BodyList>
//       {templateDollarExchange.map(({ currency, purchase, sale }) => (
//         <BodyItem key={`${currency}-currency-id`}>
//           <ItemData>{currency}</ItemData>
//           <ItemData>{purchase}</ItemData>
//           <ItemData>{sale}</ItemData>
//         </BodyItem>
//       ))}
//     </BodyList>
//     <BodyItem></BodyItem>
//   </CurrencyBody>
// </CurrencyContainer>
