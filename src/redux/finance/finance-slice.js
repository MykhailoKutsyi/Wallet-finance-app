import { createSlice } from '@reduxjs/toolkit';
import financeOperations from './finance-operations';

const initialState = {
  categories: null,
  data: [],
  error: null,
  loading: false,
  totalBalance: 28000, //null
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
    [financeOperations.createTransactions.fulfilled](state, { payload }) {
      return [payload, ...state];
    },
    [financeOperations.categories.fulfilled](_, { payload }) {
      return payload;
    },
  },
});

export default financeSlice.reducer;
