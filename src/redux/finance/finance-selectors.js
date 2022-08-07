const getIsModalAddTransaction = state =>
  state.global.isModalAddTransactionOpen;
const getIsModalLogout = state => state.global.isModalLogoutOpen;
const getIsLoading = state => state.global.isLoading;
const getTotalBalance = state => state.finance.totalBalance;
const getTransactions = state => state.finance.transactions;
const getCategories = state => state.finance.categories;

const globalSelectors = {
  getIsModalAddTransaction,
  getIsModalLogout,
  getIsLoading,
  getTotalBalance,
  getTransactions,
  getCategories,
};

export default globalSelectors;
