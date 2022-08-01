import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartWrapper, ChartTitle,BalanceSpan } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip);

const Chart = ({dataForChart}) => {

    return (
        <ChartWrapper>
            <ChartTitle>Statistics</ChartTitle>
            <Doughnut data={dataForChart} />
            <BalanceSpan>UAH 24000.00</BalanceSpan> {/* Заглушка !!!*/}
        </ChartWrapper>
    );

};

export default Chart;