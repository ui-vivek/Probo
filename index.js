const express = require('express');
const cron = require('node-cron');
const { monitorStockPrices } = require('./services/stockService');


const app = express();
const PORT = 3000;

app.use(express.json());

// Define API routes (for checking the status, reports, etc.)
app.use('/api', require('./routes/api'));

// Schedule the stock monitoring function to run every minute
cron.schedule('* * * * *', () => {
  monitorStockPrices();
});

app.listen(PORT, () => {
  console.log(`Trading Bot Server running on http://localhost:${PORT}`);
});
