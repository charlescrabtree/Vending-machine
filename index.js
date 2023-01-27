const process = require('process');
const { parseArgs } = require('./parse-args.js');

const { itemCost, payment } = parseArgs(process.argv);
// Need to add quarters === 25
// Dimes === 10
// Nickels === 5
// Dollars === 100

function calculateChange(price, amountPaid) {
  let change = amountPaid - price;
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  while (change >= 25) {
    change -= 25;
    quarters += 1;
  }

  while (change >= 10) {
    change -= 10;
    dimes += 1;
  }

  while (change >= 5) {
    change -= 5;
    nickels += 1;
  }

  while (change >= 1) {
    change -= 1;
    pennies += 1;
  }

  let maxCoin = Math.max(quarters, dimes, nickels, pennies);

  let maxCoinLen = maxCoin.toString().length;

  if (quarters > 0) {
    console.log(`Quarters: ${quarters.toString().padStart(maxCoinLen)}`);
  }
  if (dimes > 0) {
    console.log(`Dimes: ${dimes.toString().padStart(maxCoinLen)}`);
  }
  if (nickels > 0) {
    console.log(`Nickels: ${nickels.toString().padStart(maxCoinLen)}`);
  }
  if (pennies > 0) {
    console.log(`Pennies: ${pennies.toString().padStart(maxCoinLen)}`);
  }

  console.log(`Total Change: $${(amountPaid - price) / 100}`);
}

console.log(calculateChange(itemCost, payment));