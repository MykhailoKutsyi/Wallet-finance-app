import { createSlice } from '@reduxjs/toolkit';
import financeOperations from './finance-operations';

const initialState = {
  categories: null,
  data: [],
  error: null,
  loading: false,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: {
    // get transaction current user's
    [financeOperations.getCurrentTransactions.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [financeOperations.getCurrentTransactions.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.data = action.payload.data;
    },
    [financeOperations.getCurrentTransactions.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default financeSlice.reducer;
