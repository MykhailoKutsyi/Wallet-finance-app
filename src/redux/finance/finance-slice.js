import { createSlice } from '@reduxjs/toolkit';
import financeOperations from './finance-operations';
import {
  dataForDiagramTable,
  dataForChart,
} from 'components/DiagramTab/js/initial-data';

const initialState = {
  categories: null,
  data: [],
  statistics: {
    dataForDiagramTable,
    dataForChart,
    income: null,
    expenses: null,
  },
  error: null,
  loading: false,
  totalBalance: 0,
  page: 1,
  limit: 5,
  totalPages: 1,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: {
    [financeOperations.getCurrentTransactions.pending]: (state, action) => {
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
    [financeOperations.getCurrentTransactions.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
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
    [financeOperations.createTransactions.fulfilled]: (state, { payload }) => {
      state.totalBalance = payload.balance;
    },
    [financeOperations.categories.fulfilled](state, { payload }) {
      state.categories = payload;
    },
  },
});

export default financeSlice.reducer;
