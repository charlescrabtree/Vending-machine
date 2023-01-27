/**
 * @file Vending machine change calculator
 * 
 * @requires process
 */

const process = require('process');
/**
 * @imports imports parseArgs from parse-args.js
 * */

const { parseArgs } = require('./parse-args.js');

const { itemCost, payment } = parseArgs(process.argv);
// Need to add quarters === 25
// Dimes === 10
// Nickels === 5
// Dollars === 100

/**
 * @function calculateChange
 * 
 * @param {number} price - cost of the item
 * @param {number} amountPaid - amount paid
 * 
 * @returns {string} - console.log the change in terms of quarters, dimes, nickels, pennies and the total change
 * */

/**
@function calculateChange
@param {number} price - The price of the item being purchased.
@param {number} amountPaid - The amount paid by the customer.
@returns {void} - This function calculates the change due to a customer and outputs the number of each coin needed to make change and the total change in the console.
*/

function calculateChange(price, amountPaid) {
  let change = amountPaid - price;
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  // Uses while loops to determine the amount of each coin needed to make change 
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

  //finds the longest number of coins needed to make change
  let maxCoin = Math.max(quarters, dimes, nickels, pennies);

  //finds the length of the longest number of coins needed to make change
  let maxCoinLen = maxCoin.toString().length;

  //checks and prints the amount of each coin needed to make change.
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

  //prints the total change
  console.log(`Total Change: $${(amountPaid - price) / 100}`);
}

//calls the calculateChange function and outputs the result in terminal
console.log(calculateChange(itemCost, payment));