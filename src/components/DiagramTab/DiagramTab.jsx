import { useState } from 'react';
import { useSelector } from 'react-redux';
import globalSelectors from 'redux/finance/finance-selectors';


import Chart from "../Chart/Chart";
import Table from "../Table/Table";
import DatePicker from 'components/DatePicker/DatePicker';
import { Wrapper, SubWrapper } from "./DiagramTab.styled";

const DiagramTab = () => {
  const currentBalance = useSelector(globalSelectors.getTotalBalance);

  const [datesForFilter, setDatesForFilter] = useState({
    firstDate: null,
    secondDate: null,
  });
    
  const colorsArray = [
    '#fed057',
    '#ffd8d0',
    '#fd9498',
    '#c5baff',
    '#6e78e8',
    '#4a56e2',
    '#81e1ff',
    '#24cca7',
    '#00ad84',
  ];

  const expenseArray = [
    'Basic expences',
    'Products',
    'Car',
    'Self care',
    'Child care',
    'Household',
    'Education',
    'Leisure',
    'Other expenses'
  ];

  const dataForChart = {
    labels: expenseArray,
    datasets: [
      {
        label: '# of Votes',
        data: [8700.00, 3800.74, 1500.00, 800.00, 2208.50, 300.00, 3400.00, 1230.00, 610.00],
        backgroundColor: colorsArray,
        borderColor: colorsArray,
        borderWidth: 1,
      },
    ],
    }; 
  
  const dataForTable = [ 
    {color: colorsArray[0], expense: expenseArray[0], value: 8700.00},
    {color: colorsArray[1], expense: expenseArray[1], value: 3800.74},
    {color: colorsArray[2], expense: expenseArray[2], value: 1500.00},
    {color: colorsArray[3], expense: expenseArray[3], value: 800.00},
    {color: colorsArray[4], expense: expenseArray[4], value: 2208.50},
    {color: colorsArray[5], expense: expenseArray[5], value: 300.00},
    {color: colorsArray[6], expense: expenseArray[6], value: 3400.00},
    {color: colorsArray[7], expense: expenseArray[7], value: 1230.00},
    {color: colorsArray[8], expense: expenseArray[8], value: 610.00}
    ]; 
  const expenses = 22549.24; 

  const income = 27350.00; 

  const onDateInput = (event) => {
    const { firstDate, secondDate } = datesForFilter;

    const { id, value } = event.currentTarget;
    setDatesForFilter({ ...datesForFilter, [id]: value });
    console.log(datesForFilter);
    console.log(firstDate < secondDate);
  }
  
  return (
    <Wrapper>
      <Chart
          dataForChart={dataForChart}
          currentBalance={currentBalance}
      />
      <SubWrapper>
        <DatePicker
          onChange={onDateInput}
          values={datesForFilter}
        />

        <Table
          data={dataForTable}
          expenses={expenses}
          income={income}
          />
      </SubWrapper>
    </Wrapper>
  )
};

export default DiagramTab;

// Example of response from backend: 
// [
//   {
//     "amount": 500,
//     "type": "income/expense",
//     "category": "Regular income",
//     "comment": "January salary",
//     "date": "2021-02-01",
//     "balance": 1000,
//     "owner": "61994b7dc2b3164f924883cc",
//     "createdAt": "2021-11-20T19:37:20.178Z",
//     "updatedAt": "2021-11-20T19:37:20.178Z",
//     "year": 2022,
//     "month": 2,
//     "id": "61994e70df4763ac4010ed06"
//   }
// ]