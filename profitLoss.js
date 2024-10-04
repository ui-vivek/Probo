const {tradingBot} = require('./tradingLogic');
const generateProfitLossReport = () => {
  const { balance, stockHeld, stockBuyPrice } = tradingBot;
  const currentStockValue = stockHeld * stockBuyPrice;
  const totalBalance = balance + currentStockValue;
  const profitOrLoss = totalBalance - 100; // Initial balance was $100
  return {
    balance: `$${balance.toFixed(2)}`,
    stockHeld,
    stockBuyPrice: `$${stockBuyPrice.toFixed(2)}`,
    totalBalance: `$${totalBalance.toFixed(2)}`,
    profitOrLoss: `$${profitOrLoss.toFixed(2)}`,
  };
};

module.exports = { generateProfitLossReport };