const { describe, it } = require('@jest/globals');
const process = require('process');
const { parseArgs } = require('./parse-args.js');

describe('parseArgs', () => {
  it('provides an itemCost and payment', () => {
    const args = [
      '--item-cost',
      '7',
      '--payment',
      '8.5',
    ];
    const { itemCost, payment } = parseArgs(args);
    expect(itemCost).toBe(700);
    expect(payment).toBe(850);
  });

  it('exits if item cost is missing', () => {
    jest.spyOn(process, 'exit')
      .mockImplementation((number) => {
        throw new Error('process.exit: ' + number);
      });
    const args = [
      '--payment',
      '8.5',
    ];
    expect(() => {
      const { itemCost, payment } = parseArgs(args);
    }).toThrow();
  });
});