import { createSlice } from '@reduxjs/toolkit';
import { register, logOut, logIn, refresh } from './session-operations';

const initialState = {
  error: null,
  isAuth: false,
  loading: false,

  token: null,

  user: {
    name: '',
    email: '',
    balance: '',
  },
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isAuth = true;
    },
    [register.rejected](state) {
      state.error = true;
    },
    [logIn.fulfilled](state, { payload }) {
      // state.user = payload.user;
      state.token = payload.token;
      state.isAuth = true;
    },
    [logIn.rejected](state) {
      state.error = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.session.isAuth = false;
    },
    [refresh.fulfilled](state, { payload }) {
      state.user = payload;
      state.isAuth = true;
    },
  },
});

export default sessionSlice.reducer;
