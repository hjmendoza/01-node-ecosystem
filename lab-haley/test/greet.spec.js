const greet = require('../lab-haley/lib/greet.js');

describe('greet module', () => {

  it('should return null when passed non string', () => {
    expect(greet()).toBeNull();
  })

  it('should return "hello world" when passed world', () => {
    let expected = 'hello world';
    let actual = greet('world')
    expect(actual).toBe(expected);
  })
})