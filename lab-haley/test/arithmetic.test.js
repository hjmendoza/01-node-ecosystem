const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic module', () => {
  
  it('should return null if either argument is a non-number', () => {
    expect(arithmetic.add()).toBeNull();
  });

  it('should return the sum of both numbers when passed numbers', () => {
    expect(arithmetic.add(1, 2)).toEqual(3);
  });
});