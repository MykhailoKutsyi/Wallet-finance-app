const getIsModalAddTransaction = state =>
  state.global.isModalAddTransactionOpen;
const getIsModalLogout = state => state.global.isModalLogoutOpen;
const getIsLoading = state => state.global.isLoading;
const getTotalBalance = state => state.finance.totalBalance;

const globalSelectors = {
  getIsModalAddTransaction,
  getIsModalLogout,
  getIsLoading,
  getTotalBalance,
};

export default globalSelectors;
