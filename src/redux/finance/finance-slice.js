import { createSlice } from '@reduxjs/toolkit';

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
  extraReducers: {},
});

export default financeSlice.reducer;
