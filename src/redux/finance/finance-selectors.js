const getCurrentTransactions = state => state.finance.data;
const getTotalBalance = state => state.finance.totalBalance;
const getTransactions = state => state.finance.transactions;
const getIncome = state => state.finance.statistics.income;
const getExpenses = state => state.finance.statistics.expenses;
const getDataForChart = state => state.finance.statistics.dataForChart;
const getDataForDiagramTable = state => state.finance.statistics.dataForDiagramTable;


const financeSelectors = {
  getCurrentTransactions,
  getTotalBalance,
  getTransactions,
  getIncome,
  getExpenses,
  getDataForChart,
  getDataForDiagramTable
};

export default financeSelectors;
