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
      toast('Registration successfull!');
      return data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('Sorry, this email in use!');
        return rejectWithValue();
      }
      toast.error(error.message);
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
      toast.error(error.response.data.message);
      return rejectWithValue();
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.get('/api/auth/logout');
      token.unset('');
    } catch (error) {
      toast.error('Something went wrong. Try again,please');
      return rejectWithValue();
    }
  }
);

const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const localStorageToken = state.session.token;

    if (localStorageToken === null) return rejectWithValue();

    token.set(localStorageToken);
    try {
      const { data } = await axios.get('/api/auth/current');
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Session expired. Please, log in again');
      }
      return rejectWithValue();
    }
  }
);

export { register, logIn, logOut, refresh };
