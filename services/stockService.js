const { getStockPrice } = require('./finnhubService');
const { executeStrategy } = require('../tradingLogic');

// Use a volatile symbol (e.g., Ripple on Binance for testing purposes)
const stockSymbol = 'BINANCE:XRPUSDT';

// monitor Prices Using HTTP Requests (for periodic updates)
const monitorStockPrices = async () => {
  try {
    const currentPrice = await getStockPrice(stockSymbol);
    console.log(`Current Price of ${stockSymbol}: ₹${currentPrice}`);
    executeStrategy(currentPrice);
  } catch (error) {
    console.error('Error fetching stock price:', error);
  }
};



module.exports = { monitorStockPrices };
