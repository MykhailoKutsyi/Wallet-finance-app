import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'nodejs-rest-api-heroku.herokuapp.com/';
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

const financeOperations = { totalBalance };
export default financeOperations;
