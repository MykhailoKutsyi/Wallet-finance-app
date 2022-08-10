import { createSlice } from '@reduxjs/toolkit';
import { logOut, logIn, refresh } from './session-operations';

const initialState = {
  error: null,
  isAuth: false,
  loading: false,

  token: null,

  user: {
    id: '',
    name: 'Unknown',
    email: '',
    balance: '',
  },
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: {
    [logIn.fulfilled](state, { payload }) {
      state.token = payload.token;
      state.isAuth = true;
      state.loading = false;
    },
    [logIn.rejected](state) {
      state.error = true;
    },
    [logIn.pending](state) {
      state.loading = true;
    },
    [logOut.pending](state, _) {
      state.loading = true;
    },
    [logOut.rejected](state, _) {
      state.loading = false;
    },
    [logOut.fulfilled]() {
      return initialState;
    },
    [refresh.fulfilled](state, { payload }) {
      state.user = payload;
      state.isAuth = true;
    },
    [refresh.rejected]() {
      return initialState;
    },
  },
});

export default sessionSlice.reducer;
