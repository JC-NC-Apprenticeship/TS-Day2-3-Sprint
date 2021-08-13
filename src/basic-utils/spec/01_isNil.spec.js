const { expect } = require('chai');
import isNil from '../01_isNil';

describe('isNil', () => {
	it('should return true if arg passed is either null or undefined', () => {
		expect(isNil(null)).to.be.true;
		expect(isNil(undefined)).to.be.true;
	});
	it('should return false for other args passed', () => {
		expect(isNil(true)).to.be.false;
		expect(isNil('hiya')).to.be.false;
	});
});
