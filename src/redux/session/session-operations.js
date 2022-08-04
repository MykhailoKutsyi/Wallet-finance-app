import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'http://wallet-backend-app-api.herokuapp.com/';
//axios.defaults.baseURL = 'http://localhost:5000/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('register', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/api/auth/users/signup', credentials);
    token.set(data.token);
    toast('Welcome to wallet');
    return data;
  } catch (error) {
    toast.error('Email in use');
    return thunkAPI.rejectWithValue();
  }
});

const logIn = createAsyncThunk(
  '/users/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/auth/users/login', credentials);
      token.set(data.token);
      toast('Welcome to wallet');
      return data;
    } catch (error) {
      toast.error('E-mail or password is wrong');
      return thunkAPI.rejectWithValue();
    }
  }
);

const logOut = createAsyncThunk('auth/logout', async thunkAPI => {
  try {
    await axios.post('/api/auth/logout');
    token.unset('');
  } catch (error) {
    toast.error('Something went wrong. Try again,please');
    return thunkAPI.rejectWithValue();
  }
});
export { register, logIn, logOut };
