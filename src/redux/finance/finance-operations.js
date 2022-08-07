import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://wallet-backend-app-api.herokuapp.com/';

const getCurrentTransactions = createAsyncThunk(
  'finance/transactions',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/api/transactions?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const financeOperations = { getCurrentTransactions };

export default financeOperations;
