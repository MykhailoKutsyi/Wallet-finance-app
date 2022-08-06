import { createSlice } from '@reduxjs/toolkit';
import financeOperations from './finance-operations';

const initialState = {
  categories: null,
  data: [],
  error: null,
  loading: false,
  totalBalance: 28000, //null
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
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    },
    [financeOperations.getCurrentTransactions.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default financeSlice.reducer;
