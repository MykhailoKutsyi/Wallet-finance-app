import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://wallet-backend-app-api.herokuapp.com/';

// wtf
const getTotalBalance = createAsyncThunk(
  'finance/totalBalance',
  async (credentials, thunkAPI) => {
    try {
      // const { data } = await axios.get(
      //   '/api/finance/totalbalance',
      //   credentials)
      const data = 25000;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const getCurrentTransactions = createAsyncThunk(
  'dashboard/getCurrentTransactions',
  async () => {
    try {
      // const { data } = await axios.get(`api/transactions/`);
      // template data
      const data = {
        status: 'success',
        data: [
          {
            id: '00000002',
            date: '08.01.19',
            type: '-',
            category: 'Car',
            comment: 'Maintenance',
            sum: '600.00',
            balance: '6300.00',
          },
          {
            id: '00000004',
            date: '16.01.20',
            type: '-',
            category: 'Other',
            comment:
              'Ad enim amet nostrud qui sunt enim consectetur excepteur ad adipisicing consectetur proident ipsum.',
            sum: '500.00',
            balance: '6400.00',
          },
          {
            id: '00000003',
            date: '07.11.18',
            type: '-',
            category: 'Products',
            comment: 'Buy products',
            sum: '5000000.00',
            balance: ' 5800000.00',
          },
          {
            id: '00000005',
            date: '04.02.19',
            type: '+',
            category: 'Other',
            comment:
              'Gift for your wife. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, voluptates.',
            sum: '300.00',
            balance: '6900.00',
          },
        ],
      };
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const financeOperations = {
  getTotalBalance,
  getCurrentTransactions,
};

export default financeOperations;
