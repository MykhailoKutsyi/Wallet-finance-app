import { createSlice } from '@reduxjs/toolkit';
import { register, logOut } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,

  global: { isLoading: false, isModalAddTransactionOpen: false },
  session: { isAuth: false, error: false },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.session.isAuth = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.session.isAuth = false;
    },
  },
});

export default authSlice.reducer;
