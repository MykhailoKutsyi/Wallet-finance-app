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

const createTransactions = createAsyncThunk(
  'finance/createTransactions',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(
        '/api/transactions/create',
        credentials
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
const categories = createAsyncThunk(
  'finance/categories',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('api/categories');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
const financeOperations = {
  totalBalance,
  transactions,
  createTransactions,
  categories,
};
export default financeOperations;
