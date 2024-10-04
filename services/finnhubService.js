const finnhub = require('finnhub');
const { FINNHUB_API_KEY } = require('../config/config');

// finnhub API client for HTTP requests
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

// function to get the current price using HTTP API
const getStockPrice = (symbol) => {
  return new Promise((resolve, reject) => {
    finnhubClient.quote(symbol, (error, data, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(data.c); // 'c' is the current price in the response object
      }
    });
  });
};



module.exports = { getStockPrice };
