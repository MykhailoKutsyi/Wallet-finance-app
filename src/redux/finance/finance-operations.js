import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
  getCurrentTransactions,
  createTransactions,
  categories,
};

export default financeOperations;
