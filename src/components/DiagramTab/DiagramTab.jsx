import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from "../Chart/Chart";
import Table from "../Table/Table";
import DatePicker from 'components/DatePicker/DatePicker';
import { Wrapper, SubWrapper } from "./DiagramTab.styled";
import { useEffect } from 'react';
import financeOperations from '../../redux/finance/finance-operations';
import financeSelectors from '../../redux/finance/finance-selectors';
import sessionSelectors from '../../redux/session/session-selectors';

const DiagramTab = () => {

  const dispatch = useDispatch();

  const [monthForFilter, setMonthForFilter] = useState(null);
  const [yearForFilter, setYearForFilter] = useState(null);

  const currentBalance = useSelector(sessionSelectors.getUser);
  const dataForDiagramTable = useSelector(financeSelectors.getDataForDiagramTable);
  const dataForChart = useSelector(financeSelectors.getDataForChart);
  const income = useSelector(financeSelectors.getIncome);
  const expenses = useSelector(financeSelectors.getExpenses);
  
  useEffect(() => {
    if (!yearForFilter || !monthForFilter) {
      return;
    }
    dispatch(financeOperations.getTransactionsInfo({ month: monthForFilter, year: yearForFilter, }));


  }, [yearForFilter, monthForFilter, dispatch]);

  const onDateInput = (event) => {

    const { name, value } = event.target;

    if (!name || !value) {
      return;
    }

    if (name === "year") {
      const year = event.target.value;
      setYearForFilter(Number(year));
    }

    if (name === "month") {
      const month = event.target.value;
      setMonthForFilter(Number(month));
    }
  };

  return (
    <Wrapper>
      {expenses > 0 ? 
      <Chart
          dataForChart={dataForChart}
          currentBalance={currentBalance}
      /> 
      : 
      <h2 style={{padding: '200px 50px', maxWidth: '400px'}}> No expenses to display. To show chart, set date range when you spent any money</h2>
      }
      <SubWrapper>
        <DatePicker
          onInputChange={onDateInput}
        />

      {dataForDiagramTable && <Table
          data={dataForDiagramTable}
          expenses={expenses}
          income={income}
          />}
      </SubWrapper>
    </Wrapper>
  )
};

export default DiagramTab;
