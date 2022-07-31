import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'nodejs-rest-api-heroku.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await axios.post('/api/auth/register', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error('Email in use');
      return thunkAPI.rejectWithValue();
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('/api/auth/logout', credentials);
      token.unset('');
    } catch (error) {
      toast.error('Something went wrong. Try again,please');
      return thunkAPI.rejectWithValue();
    }
  }
);
export { register, logOut };
