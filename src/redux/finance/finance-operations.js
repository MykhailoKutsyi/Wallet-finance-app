import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { dataForDiagramTable, dataForChart, COLORS_ARRAY } from 'components/DiagramTab/JS/initial-data';

const totalBalance = createAsyncThunk(
  'finance/totalBalance',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(
        '/api/finance/totalbalance',
        credentials
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const getTransactionsInfo = createAsyncThunk(
  'finance/transactions',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const { month, year } = credentials;
      const { data } = await axios.get(
        `/api/transactions/filter?month=${month}&year=${year}`
      );
      const newTableData = dataForDiagramTable.map(({ color, expense, value }, index) => {
        return {
          color,
          expense,
          value: data.statistics[index].total,
        }
      });

      const valuesArr = dataForDiagramTable.map(item => item.value);

      const newChartData = {
        ...dataForChart,
        datasets: [
          {
        label: 'expenses',
        data: valuesArr,
        backgroundColor: COLORS_ARRAY,
        borderColor: COLORS_ARRAY,
        borderWidth: 1,
        },
        ]
      }

      return {
        newTableData,
        newChartData,
        income: data.income,
        expenses: data.expenses,
      };

    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const financeOperations = { totalBalance, getTransactionsInfo };
export default financeOperations;
