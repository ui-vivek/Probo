# Trading Bot

This is a simple trading bot that monitors stock prices and executes buy/sell strategies based on predefined conditions. It uses the Finnhub API to fetch stock prices and Node.js for the server-side logic.

## Features

- Monitors stock prices at regular intervals.
- Buys stocks when the price drops by 1%.
- Sells stocks when the price rises by 2%.
- Generates profit and loss reports.

## Technologies Used

- Node.js
- Express
- Axios
- Finnhub API
- Node-cron

## Installation

1. Clone the repository:
   ```bash
   git clone git https://github.com/ui-vivek/probo.git
   cd trading-bot
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Finnhub API key:
   ```bash
   FINNHUB_API_KEY=your_api_key_here
   ```

## Usage

1. Start the server:
   ```bash
   node index.js
   ```

2. Access the API to check the trading bot status:
   ```bash
   GET http://localhost:3000/api/status
   ```

## File Structure

```
.
├── config
│   └── config.js          # Configuration file for API keys
├── routes
│   └── api.js             # API routes for the trading bot
├── services
│   ├── finnhubService.js  # Service to interact with Finnhub API
│   └── stockService.js    # Service to monitor stock prices
├── tradingLogic.js         # Logic for buying and selling stocks
├── profitLoss.js           # Logic for generating profit/loss reports
├── index.js                # Entry point of the application
└── package.json            # Project metadata and dependencies
```

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements.

## License

This project is licensed under the MIT License.
