const express = require('express');
const router = express.Router();
const { generateProfitLossReport } = require('../profitLoss');

// Endpoint to check trading bot status
router.get('/status', (req, res) => {
  const report = generateProfitLossReport();
  res.json(report);
});

module.exports = router;
