const parseArgs = (argv) => {
  let itemCostInput = null;
  let paymentInput = null;

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

  if(itemCostInput == null) {
    console.error('--item-cost must be provided');
    process.exit(1);
  }

  const itemCost = Number(itemCostInput) * 100;
  if(isNaN(itemCost)) {
   console.log('--item-cost must be a number');
   process.exit(1);
  }

  if(paymentInput == null) {
    console.error('--payment must be provided');
    process.exit(1);
  }

  const payment = Number(paymentInput) * 100;
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
