import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartWrapper, ChartTitle,BalanceSpan } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip);

const Chart = ({dataForChart, expenses}) => {

    return (
        <ChartWrapper>
            <ChartTitle>Statistics</ChartTitle>
            <Doughnut data={dataForChart} />
            <BalanceSpan>₴ {Number(expenses).toFixed(2)}</BalanceSpan>
        </ChartWrapper>
    );

};

export default Chart;