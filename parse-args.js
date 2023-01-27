const parseArgs = (argv) => {
  /**
   * @type {null}
   */
  let itemCostInput = null;
  /**
   * @type {null}
   */
  let paymentInput = null;

  /**
   * Iterates over teh command line arguments, looking for the "--itemCost" and "--payment" arguments.
   * If found, sets the corresponding input variable and increments the iterator.
  */

  for(let i = 0; i < argv.length; ++i) {
    const arg = argv[i];
    if(arg === '--item-cost') {
      itemCostInput = argv[i+1];
      ++i;
    } else if(arg === '--payment') {
      paymentInput = argv[i+1];
      ++i;
    }
  }

  /**
   * If the item cost input is null, logs an error message and exits the script with status code 1.
   */

  if(itemCostInput == null) {
    console.error('--item-cost must be provided');
    process.exit(1);
  }

  /**
   * Converts the item cost input to a number and multiplies by 100.
   * @type {number}
   */
  const itemCost = Number(itemCostInput) * 100;

  /**
   * If the item cost input is not a number, logs an error message and exits the script with status code 1.
   */
  if(isNaN(itemCost)) {
     console.log('--item-cost must be a number');
     process.exit(1);
  }

  /**
   * If the payment input is null, logs an error message and exits the script with status code 1.
   */
  if(paymentInput == null) {
    console.error('--payment must be provided');
    process.exit(1);
  }

  /**
   * Converts the payment input to a number and multiplies by 100.
   * @type {number}
   */
  const payment = Number(paymentInput) * 100;
  /**
   * If the payment input is not a number, logs an error message and exits the script with status code 1.
   */
  if(isNaN(payment)) {
    console.log('--payment must be a number');
    process.exit(1);
  }
  return {
    itemCost,
    payment,
  }
}

module.exports = { parseArgs, };
