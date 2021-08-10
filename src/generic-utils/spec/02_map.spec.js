const { expect } = require('chai');
const sinon = require('sinon');
const map = require('../02_map');

describe('map', () => {
  it('should return an array when passed a callback and an array', () => {
    expect(map(() => {}, [])).to.deep.equal([]);
  });
  it('should invoke the callback for every item in the array', () => {
    const arr = [1];
    const spy = sinon.spy();
    map(spy, arr);
    expect(spy.callCount).to.equal(1);
    const arrTwo = [1, 2, 3, 4, 5];
    const spyTwo = sinon.spy();
    map(spyTwo, arrTwo);
    expect(spyTwo.callCount).to.equal(5);
  });
  it('should pass the value, index and array ref, to the callback on each invocation', () => {
    const arr = ['Emo', 'Trance', 'Dubstep', 'Goth'];
    const spy = sinon.spy();
    map(spy, arr);
    expect(spy.args).to.deep.equal([
      ['Emo', 0, arr],
      ['Trance', 1, arr],
      ['Dubstep', 2, arr],
      ['Goth', 3, arr],
    ]);
    spy.args.forEach(([_, __, arrInstance]) => {
      expect(arrInstance).to.equal(arr);
    });
  });
  it('should include every callbacks output to the returned array', () => {
    const arr = ['Rock', 'Raggae', 'Punk'];
    const spy = sinon
      .stub()
      .onFirstCall()
      .returns('Foo Fighters')
      .onSecondCall()
      .returns('Collie Buddz')
      .onThirdCall()
      .returns('Blink-182');
    const output = map(spy, arr);
    expect(output).to.deep.equal(['Foo Fighters', 'Collie Buddz', 'Blink-182']);
  });
  it('should return a new array and not mutate the input', () => {
    const arr = ['Legend'];
    const spy = sinon.stub().onFirstCall().returns('Dave Grohl');
    const output = map(spy, arr);
    expect(output).to.not.equal(arr);
    expect(arr).to.deep.equal(['Legend']);
  });
});
