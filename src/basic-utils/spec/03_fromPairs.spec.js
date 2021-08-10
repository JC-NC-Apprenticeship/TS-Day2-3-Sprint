const { expect } = require('chai');
const fromPairs = require('../03_fromPairs');

describe('fromPairs', () => {
  it('returns an empty object when an empty array is passed', () => {
    const input = [];
    const actual = fromPairs(input);
    const expected = {};
    expect(actual).to.deep.equal(expected);
  });
  it('returns a single key value pair object when passed a single array of one pair', () => {
    const input = [['openness', 1]];
    const actual = fromPairs(input);
    const expected = { openness: 1 };
    expect(actual).to.deep.equal(expected);
  });
  it('returns an object of two key value pairs when passed an array of two nested arrays containing a pair in each', () => {
    const input = [
      ['emotional', 1],
      ['angst', 2],
    ];
    const actual = fromPairs(input);
    const expected = {
      emotional: 1,
      angst: 2,
    };
    expect(actual).to.deep.equal(expected);
  });
  it('returns an object of multiple key value pairs when passed an array of multiple nested arrays containing a pair in each', () => {
    const input = [
      ['shyness', 1],
      ['adventurous', 2],
      ['fearless', 3],
      ['sociable', 4],
    ];
    const actual = fromPairs(input);
    const expected = {
      shyness: 1,
      adventurous: 2,
      fearless: 3,
      sociable: 4,
    };
    expect(actual).to.deep.equal(expected);
  });
});
