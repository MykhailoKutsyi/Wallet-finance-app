import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://wallet-backend-app-api.herokuapp.com/';

const getCurrentTransactions = createAsyncThunk(
  'finance/transactions',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(
        '/api/finance/transactions',
        credentials
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const financeOperations = { getCurrentTransactions };
