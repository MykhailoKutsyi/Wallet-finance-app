import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import globalSelectors from 'redux/finance/finance-selectors';
import { ToastContainer } from 'react-toastify';
// import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chart from '../Chart/Chart';
import Table from '../Table/Table';
import DatePicker from 'components/DatePicker/DatePicker';
import { Wrapper, SubWrapper } from './DiagramTab.styled';
import { useEffect } from 'react';
import financeOperations from '../../redux/finance/finance-operations';
import sessionSelectors from 'redux/session/session-selectors';

const DiagramTab = () => {
  const dispatch = useDispatch();

  const [monthForFilter, setMonthForFilter] = useState(null);
  const [yearForFilter, setYearForFilter] = useState(null);

  const currentBalance = useSelector(sessionSelectors.getTotalBalance);
  const dataForDiagramTable = useSelector(
    globalSelectors.getDataForDiagramTable
  );
  const dataForChart = useSelector(globalSelectors.getDataForChart);
  const income = useSelector(globalSelectors.getIncome);
  const expenses = useSelector(globalSelectors.getExpenses);

  console.log(expenses, income);
  useEffect(() => {
    if (!yearForFilter || !monthForFilter) {
      return;
    }
    dispatch(
      financeOperations.getTransactionsInfo({
        month: monthForFilter,
        year: yearForFilter,
      })
    );
  }, [dispatch, yearForFilter, monthForFilter]);

  const onDateInput = (event, name) => {
    console.log(event, name);

    if (!event._d) {
      return;
    }

    if (name === 'year') {
      const year = event._d.getFullYear();
      setYearForFilter(year);
    }
    if (name === 'month') {
      const month = event._d.getMonth() + 1;
      setMonthForFilter(month);
    }

    // const { id, value } = event.currentTarget;
    // setDatesForFilter({ ...datesForFilter, [id]: value });
    // console.log(datesForFilter);
  };

  return (
    <Wrapper>
      {expenses > 0 ? (
        <Chart dataForChart={dataForChart} currentBalance={currentBalance} />
      ) : (
        <h2 style={{ padding: '200px 50px', width: '50%' }}>
          {' '}
          Sorry, no expenses to display. Please, set date range including any
          transactions
        </h2>
      )}
      <SubWrapper>
        <DatePicker onChange={onDateInput} />

        <Table data={dataForDiagramTable} expenses={expenses} income={income} />
      </SubWrapper>
      <ToastContainer />
    </Wrapper>
  );
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
