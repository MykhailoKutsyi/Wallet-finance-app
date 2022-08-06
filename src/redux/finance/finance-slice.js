import { createSlice } from '@reduxjs/toolkit';
import financeOperations from './finance-operations';
import { dataForDiagramTable, dataForChart} from 'components/DiagramTab/JS/initial-data';

const initialState = {
  categories: null,
  data: null,
  statistics: {
    dataForDiagramTable,
    dataForChart,
    income: null,
    expenses: null,
  },
  error: null,
  loading: false,
  totalBalance: null,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: {
    [financeOperations.totalBalance.fulfilled](state, { payload }) {
      state.totalBalance = payload.totalBalance;
    },

    [financeOperations.getTransactionsInfo.pending](state, { payload }) {
      state.loading = true;
      state.error = null;
    },
    [financeOperations.getTransactionsInfo.fulfilled](state, { payload }) {
      state.statistics.dataForDiagramTable = payload.newTableData;
      state.statistics.dataForChart = payload.newChartData;
      state.statistics.income = payload.income;
      state.statistics.expenses = payload.expenses;
      state.loading = false;
      state.error = null;
    },
    [financeOperations.getTransactionsInfo.rejected](state, { payload }) {
      state.loading = false;
      state.error = true;
    },
    
  },
});

export default financeSlice.reducer;
