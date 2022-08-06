import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://wallet-backend-app-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/auth/users/signup', credentials);
      token.set(data.token);
      toast('Welcome to wallet');
      return data;
    } catch (error) {
      toast.error('Email in use');
      return rejectWithValue();
    }
  }
);

const logIn = createAsyncThunk(
  '/users/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/auth/users/login', credentials);
      token.set(data.token);
      toast('Welcome to wallet');
      return data;
    } catch (error) {
      toast.error('E-mail or password is wrong');
      return rejectWithValue();
    }
  }
);

const logOut = createAsyncThunk('auth/logout', async ({ rejectWithValue }) => {
  try {
    await axios.get('/api/auth/logout');
    token.unset('');
  } catch (error) {
    toast.error('Something went wrong. Try again,please');
    return rejectWithValue();
  }
});

const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const localStorageToken = state.session.token;

    if (localStorageToken === null) return rejectWithValue();

    token.set(localStorageToken);
    try {
      const { data } = await axios.get('/api/auth/current');
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export { register, logIn, logOut, refresh };
