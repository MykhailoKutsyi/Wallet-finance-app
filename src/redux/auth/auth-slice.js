import { createSlice } from '@reduxjs/toolkit';
import { register } from './auth-operations';

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
  },
});

export default authSlice.reducer;
