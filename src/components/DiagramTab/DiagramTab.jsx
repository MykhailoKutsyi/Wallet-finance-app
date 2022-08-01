import Chart from "../Chart/Chart";
import Table from "../Table/Table";
import { Wrapper } from "./DiagramTab.styled";

const Section = () => {
  const dataForChart = {
    labels: [
      'Basic expences',
      'Products',
      'Car',
      'Self care',
      'Child care',
      'Household',
      'Education',
      'Leisure',
      'Other expenses'
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [8700.00, 3800.74, 1500.00, 800.00, 2208.50, 300.00, 3400.00, 1230.00, 610.00],
        backgroundColor: [
          '#fed057',
          '#ffd8d0',
          '#fd9498',
          '#c5baff',
          '#6e78e8',
          '#4a56e2',
          '#81e1ff',
          '#24cca7',
          '#00ad84',
        ],
        borderColor: [
          '#fed057',
          '#ffd8d0',
          '#fd9498',
          '#c5baff',
          '#6e78e8',
          '#4a56e2',
          '#81e1ff',
          '#24cca7',
          '#00ad84',
        ],
        borderWidth: 1,
      },
    ],
    }; {/* Заглушка !!!*/}
    

    const dataForTable = [ 
    {expense: 'Basic expences', value: 8700.00},
    {expense: 'Products', value: 3800.74},
    {expense: 'Car', value: 1500.00},
    {expense: 'Self care', value: 800.00},
    {expense: 'Child care', value: 2208.50},
    {expense: 'Household', value: 300.00},
    {expense: 'Education', value: 3400.00},
    {expense: 'Leisure', value: 1230.00},
    {expense: 'Other expenses', value: 610.00}
    ]; {/* Заглушка !!!*/}

    const expenses = 22549.24; {/* Заглушка !!!*/}

    const income = 27350.00; {/* Заглушка !!!*/}

    return (
        <Wrapper>
            <Chart
                dataForChart={dataForChart}
            />
            <Table
                data={dataForTable}
                expenses={expenses}
                income={income}
            />
        </Wrapper>
    )
};

export default Section;