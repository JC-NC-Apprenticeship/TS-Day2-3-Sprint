const { expect } = require('chai');
const sinon = require('sinon');
const spread = require('../05_spread');

describe('spread', () => {
  it('should return a new function', () => {
    const func = () => {};
    const output = spread(func);
    expect(output).to.not.equal(func);
    expect(output).to.be.a('function');
  });
  it('should spread args from returned function into passed function', () => {
    const spy = sinon.spy();
    const spreadSpy = spread(spy);
    spreadSpy(["She's a Killer Queen", 'Guaranteed to blow your mind']);
    expect(spy.args[0]).to.deep.equal([
      "She's a Killer Queen",
      'Guaranteed to blow your mind',
    ]);
  });
  it('should use the this value from the returned call', () => {
    const spy = sinon.spy();
    const thisObj = { spreadSpy: spread(spy) };
    thisObj.spreadSpy();
    expect(spy.thisValues[0]).to.equal(thisObj);
  });
  it('should provide return value from passed function', () => {
    const spy = sinon.stub().returns('I want it all, and I want it now!');
    const spreadSpy = spread(spy);
    const output = spreadSpy();
    expect(output).to.equal('I want it all, and I want it now!');
  });
});
