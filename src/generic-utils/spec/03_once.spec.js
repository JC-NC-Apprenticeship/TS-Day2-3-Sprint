const { expect } = require('chai');
const sinon = require('sinon');
const once = require('../03_once');

describe('once', () => {
  it('should return a new function', () => {
    const func = () => {};
    const output = once(func);
    expect(output).to.not.equal(func);
    expect(output).to.be.a('function');
  });
  it('should invoke original passed function when returned is invoked', () => {
    const spy = sinon.spy();
    const returnedFunc = once(spy);
    returnedFunc();
    expect(spy.called).to.be.true;
  });
  it('should pass args from returned function to the passed function', () => {
    const spy = sinon.spy();
    const returnedFunc = once(spy);
    const args = ['TS', 'is', 'way', 'better', 'than', 'JS', 'just sayin'];
    returnedFunc(...args);
    const firstCallArgs = spy.args[0];
    expect(firstCallArgs).to.deep.equal(args);
  });
  it('should return the value from the passed function when returned function is invoked', () => {
    const spy = sinon.stub().returns('TypeScript please!');
    const returnedFunc = once(spy);
    const output = returnedFunc();
    expect(output).to.deep.equal('TypeScript please!');
  });
  it('should only invoke the passed function one time', () => {
    const spy = sinon.spy();
    const returnedFunc = once(spy);
    returnedFunc();
    returnedFunc();
    expect(spy.calledOnce).to.be.true;
  });
  it('should always return first value on further invocations', () => {
    const spy = sinon
      .stub()
      .onFirstCall()
      .returns('Dave Grohl')
      .returns('Taylor Hawkins');
    const returnedFunc = once(spy);
    returnedFunc();
    returnedFunc();
    const thirdOutput = returnedFunc();
    expect(thirdOutput).to.deep.equal('Dave Grohl');
  });
});
