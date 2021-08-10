const { expect } = require('chai');
const sinon = require('sinon');
const before = require('../04_before');

describe('before', () => {
  it('should return a new function', () => {
    const func = () => {};
    const output = before(5, func);
    expect(output).to.not.equal(func);
    expect(output).to.be.a('function');
  });
  it('should invoke original passed function when returned is invoked', () => {
    const spy = sinon.spy();
    const returnedFunc = before(5, spy);
    returnedFunc();
    expect(spy.called).to.be.true;
  });
  it('should pass args from returned function to the passed function', () => {
    const spy = sinon.spy();
    const returnedFunc = before(2, spy);
    const args = ['knowing', 'me', 'knowing', 'you', 'a-ha!'];
    returnedFunc(...args);
    const firstCallArgs = spy.args[0];
    expect(firstCallArgs).to.deep.equal(args);
  });
  it('should return the value from the passed function when returned function is invoked', () => {
    const spy = sinon.stub().returns('Alpha Papa');
    const returnedFunc = before(2, spy);
    const output = returnedFunc();
    expect(output).to.deep.equal('Alpha Papa');
  });
  it('should only invoke the passed function up the maximum noOfCalls', () => {
    const spy = sinon.spy();
    const returnedFunc = before(3, spy);
    returnedFunc();
    returnedFunc();
    returnedFunc();
    expect(spy.calledTwice).to.be.true;
  });
  it('should always return the last value on noOfCalls invocations and beyond', () => {
    const spy = sinon
      .stub()
      .onFirstCall()
      .returns('Out on the wiley, windy moors')
      .onSecondCall()
      .returns("We'd roll and fall in green")
      .onThirdCall()
      .returns('You had a temper like my jealousy');
    const returnedFunc = before(3, spy);
    returnedFunc();
    returnedFunc();
    const secondOutput = returnedFunc();
    const thirdOutput = returnedFunc();
    const fourthOutput = returnedFunc();
    expect(secondOutput).to.deep.equal("We'd roll and fall in green");
    expect(thirdOutput).to.deep.equal("We'd roll and fall in green");
    expect(fourthOutput).to.deep.equal("We'd roll and fall in green");
  });
});
