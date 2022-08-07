const getCurrentTransactions = state => state.finance.data;
const getTotalBalance = state => state.finance.totalBalance;
const getTransactions = state => state.finance.transactions;
const getIncome = state => state.finance.statistics.income;
const getExpenses = state => state.finance.statistics.expenses;
const getDataForChart = state => state.finance.statistics.dataForChart;
const getDataForDiagramTable = state => state.finance.statistics.dataForDiagramTable;
const getTotalPages = state => state.finance.totalPages;
const getPage = state => state.finance.page;
const getLimit = state => state.finance.limit;
const getLoadingStaus = state => state.finance.loading;

const financeSelectors = {
  getCurrentTransactions,
  getTotalBalance,
  getTransactions,
  getIncome,
  getExpenses,
  getDataForChart,
  getDataForDiagramTable
  getTotalPages,
  getPage,
  getLimit,
  getLoadingStaus,
};

export default financeSelectors;
