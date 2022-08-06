const getCurrentTransactions = state => state.finance.data;
const getTotalBalance = state => state.finance.totalBalance;
const getTransactions = state => state.finance.transactions;

const financeSelectors = {
  getCurrentTransactions,
  getTotalBalance,
  getTransactions,
};

export default financeSelectors;
