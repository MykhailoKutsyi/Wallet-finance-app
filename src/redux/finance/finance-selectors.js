const getIsModalAddTransaction = state =>
  state.global.isModalAddTransactionOpen;
const getIsModalLogout = state => state.global.isModalLogoutOpen;
const getIsLoading = state => state.global.isLoading;
const getTotalBalance = state => state.finance.totalBalance;
const getTransactions = state => state.finance.transactions;
const getIncome = state => state.finance.statistics.income;
const getExpenses = state => state.finance.statistics.expenses;
const getDataForChart = state => state.finance.statistics.dataForChart;
const getDataForDiagramTable = state => state.finance.statistics.dataForDiagramTable;


const globalSelectors = {
  getIsModalAddTransaction,
  getIsModalLogout,
  getIsLoading,
  getTotalBalance,
  getTransactions,
  getIncome,
  getExpenses,
  getDataForChart,
  getDataForDiagramTable
};

export default globalSelectors;
