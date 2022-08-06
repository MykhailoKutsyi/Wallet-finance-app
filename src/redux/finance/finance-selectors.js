const getIsModalAddTransaction = state =>
  state.global.isModalAddTransactionOpen;
const getIsModalLogout = state => state.global.isModalLogoutOpen;
const getIsLoading = state => state.global.isLoading;
const getTotalBalance = state => state.finance.totalBalance;
const getTransactions = state => state.finance.transactions;

const globalSelectors = {
  getIsModalAddTransaction,
  getIsModalLogout,
  getIsLoading,
  getTotalBalance,
  getTransactions,
};

export default globalSelectors;
