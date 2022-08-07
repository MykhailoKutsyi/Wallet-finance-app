import { createSlice } from '@reduxjs/toolkit';
import financeOperations from './finance-operations';
import {
  dataForDiagramTable,
  dataForChart,
} from 'components/DiagramTab/JS/initial-data';

const initialState = {
  categories: null,
  data: [],
  error: null,
  loading: false,
  totalBalance: 28000,
  page: 1,
  limit: 5,
  totalPages: 1,
  statistics: {
    dataForDiagramTable,
    dataForChart,
    income: null,
    expenses: null,
  },
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: {
    [financeOperations.getCurrentTransactions.pending]: state => {
      state.loading = true;
      state.error = false;
    },

    [financeOperations.getCurrentTransactions.fulfilled]: (state, action) => {
      state.data = [...state.data, ...action.payload.data];
      state.page += 1;
      state.totalPages = action.payload.totalPages;
      state.loading = false;
      state.error = false;
    },

    [financeOperations.getCurrentTransactions.rejected]: state => {
      state.loading = false;
      state.error = true;
    },

    [financeOperations.getTransactionsInfo.pending](state) {
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

    [financeOperations.getTransactionsInfo.rejected](state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export default financeSlice.reducer;
