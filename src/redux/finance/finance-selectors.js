const getCurrentTransactions = state => state.finance.data;
const getTotalBalance = state => state.finance.totalBalance;
const getTransactions = state => state.finance.transactions;
const getTotalPages = state => state.finance.totalPages;
const getPage = state => state.finance.page;
const getLimit = state => state.finance.limit;
const getLoadingStaus = state => state.finance.loading;

const financeSelectors = {
  getCurrentTransactions,
  getTotalBalance,
  getTransactions,
  getTotalPages,
  getPage,
  getLimit,
  getLoadingStaus,
};

export default financeSelectors;
