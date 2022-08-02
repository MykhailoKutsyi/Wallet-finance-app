import { createSlice } from '@reduxjs/toolkit';
import financeOperations from './finance-operations';

const initialState = {
  categories: null,
  data: null,
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
  },
});

export default financeSlice.reducer;
