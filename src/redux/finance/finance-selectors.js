const getCurrentTransactions = state => state.finance.data;
const getTotalBalance = state => state.finance.totalBalance;

const financeSelectors = {
  getCurrentTransactions,
  getTotalBalance,
};

export default financeSelectors;
