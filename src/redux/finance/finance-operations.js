import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

const transactions = createAsyncThunk(
  'finance/transactions',
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

const financeOperations = { totalBalance, transactions };
export default financeOperations;
