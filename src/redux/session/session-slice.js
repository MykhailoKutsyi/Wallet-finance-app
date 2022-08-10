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
    // [register.fulfilled](state, { payload }) {
    //   state.user = payload.user;
    //   state.isAuth = true;
    // },
    // [register.rejected](state) {
    //   state.error = true;
    // },
    [logIn.fulfilled](state, { payload }) {
      state.token = payload.token;
      state.isAuth = true;
    },
    [logIn.rejected](state) {
      state.error = true;
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
