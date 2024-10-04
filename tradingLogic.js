const tradingBot = {
  balance: 100, // Initial balance
  stockHeld: 0,   // Number of stocks held
  stockBuyPrice: 0, // Price at which the stock was bought
};

// buy stock if the price drops by 1% and sell if it rises by 2%
const buyStock = (price) => {
  const amountToBuy = tradingBot.balance / price;
  tradingBot.stockHeld += amountToBuy;
  tradingBot.balance -= amountToBuy * price;
  tradingBot.stockBuyPrice = price;
  console.log(`Bought ${amountToBuy.toFixed(2)} stocks at $${price}`);
};

const sellStock = (price) => {
  const amountToSell = tradingBot.stockHeld;
  tradingBot.balance += amountToSell * price;
  tradingBot.stockHeld = 0;
  console.log(`Sold ${amountToSell.toFixed(2)} stocks at $${price}`);
};

const executeStrategy = (currentPrice) => {
  console.log(`Current Price: $${currentPrice}`);
  console.log(`Current Balance: $${tradingBot.balance.toFixed(2)}`);
  console.log(`Stocks Held: ${tradingBot.stockHeld}`);
  console.log(`Stock Buy Price: $${tradingBot.stockBuyPrice.toFixed(2)}`);

  if (tradingBot.stockHeld === 0 && (tradingBot.stockBuyPrice === 0 || currentPrice < tradingBot.stockBuyPrice * 0.99)) {
    buyStock(currentPrice);
  } else if (tradingBot.stockHeld > 0 && currentPrice > tradingBot.stockBuyPrice * 1.02) {
    sellStock(currentPrice);
  }
  console.log(`Updated Balance: $${tradingBot.balance.toFixed(2)}`);
};
module.exports = { executeStrategy };
