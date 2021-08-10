const { expect } = require('chai');
const sinon = require('sinon');
const filter = require('../01_filter');

describe('filter', () => {
  it('should return an empty array when passed an empty array', () => {
    expect(filter(() => {}, [])).to.deep.equal([]);
  });
  it('should invoked the predicate function for the number of items in the array', () => {
    const spyOne = sinon.spy();
    filter(spyOne, []);
    expect(spyOne.callCount).to.equal(0);
    const spyTwo = sinon.spy();
    filter(spyTwo, [1, 1, 1]);
    expect(spyTwo.callCount).to.equal(3);
  });
  it('should pass value, index and arr ref to the predicate', () => {
    const spy = sinon.spy();
    const arr = [9, 8, 7];
    filter(spy, arr);
    expect(spy.args).to.deep.equal([
      [9, 0, arr],
      [8, 1, arr],
      [7, 2, arr],
    ]);
    spy.args.forEach(([_, __, arrInstance]) => {
      expect(arrInstance).to.equal(arr);
    });
  });
  it('should filter the the array contents based on the predicates return value', () => {
    const spyPred = sinon.stub();
    spyPred
      .onFirstCall()
      .returns(true)
      .onSecondCall()
      .returns(false)
      .onThirdCall()
      .returns(true);
    const arr = ['Emo', 'Soul', 'Punk'];
    const output = filter(spyPred, arr);
    expect(output).to.deep.equal(['Emo', 'Punk']);
    const spyPredTwo = sinon.stub();
    spyPredTwo
      .onFirstCall()
      .returns(false)
      .onSecondCall()
      .returns(false)
      .onThirdCall()
      .returns(true);
    const arrTwo = ['Emo', 'Trance', 'Dubstep'];
    const outputTwo = filter(spyPredTwo, arrTwo);
    expect(outputTwo).to.deep.equal(['Dubstep']);
  });
  it('should return a new array', () => {
    const spyPred = sinon.stub();
    spyPred.returns(true);
    const arr = ['Emo', 'Soul', 'Punk'];
    const output = filter(spyPred, arr);
    expect(output).to.not.equal(arr);
  });
});
