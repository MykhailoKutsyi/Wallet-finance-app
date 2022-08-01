import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleModalAddTransaction: state => {
      state.isModalAddTransactionOpen = !state.isModalAddTransactionOpen;
    },
    toggleModalLogout: state => {
      state.isModalLogoutOpen = !state.isModalLogoutOpen;
    },
  },
  extraReducers: {},
});

export const { toggleModalAddTransaction, toggleModalLogout } =
  globalSlice.actions;
export default globalSlice.reducer;
