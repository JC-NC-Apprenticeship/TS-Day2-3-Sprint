const { expect } = require('chai');
const endsWith = require('../05_endsWith');

describe('endsWith', () => {
  it('should return true when passed 2 identical strings', () => {
    const searchTerm = 'Rock';
    const searchStr = 'Rock';
    expect(endsWith(searchTerm, searchStr)).to.be.true;
  });
  it('should return false if search term is not present in string', () => {
    const searchTerm = 'Rock';
    const searchStr = '';
    expect(endsWith(searchTerm, searchStr)).to.be.false;
  });
  it('should handle when search item is at the end of a space separated search string', () => {
    const searchTerm = 'Pop';
    const searchStr = 'Blues Rock Pop';
    expect(endsWith(searchTerm, searchStr)).to.be.true;
    const searchTermTwo = 'Pop';
    const searchStrTwo = 'Blues Rock';
    expect(endsWith(searchTermTwo, searchStrTwo)).to.be.false;
  });
  it('should handle when search item is at the end of a concatenated search string', () => {
    const searchTerm = 'Pop';
    const searchStr = 'BluesRockPop';
    expect(endsWith(searchTerm, searchStr)).to.be.true;
    const searchTermTwo = 'Pop';
    const searchStrTwo = 'BluesRock';
    expect(endsWith(searchTermTwo, searchStrTwo)).to.be.false;
  });
  it('should return true when passed to identical arrays', () => {
    const searchTerm = ['Rock'];
    const searchStr = ['Rock'];
    expect(endsWith(searchTerm, searchStr)).to.be.true;
  });
  it('should return true when item is the last item in the array', () => {
    const searchTerm = ['Punk'];
    const searchStr = ['Emo', 'Soul', 'Punk'];
    expect(endsWith(searchTerm, searchStr)).to.be.true;
  });
  it('should return true when search item matches end of the array', () => {
    const searchTerm = ['Trance', 'Dubstep'];
    const searchStr = ['Emo', 'Trance', 'Dubstep'];
    expect(endsWith(searchTerm, searchStr)).to.be.true;
  });
  it('should curry the function if only first arg is passed', () => {
    const searchTerm = ['Dubstep'];
    const endsWithDubStep = endsWith(searchTerm);
    const searchStr = ['Emo', 'Trance', 'Dubstep'];
    expect(endsWithDubStep(searchStr)).to.be.true;
    const searchTermTwo = 'Pop';
    const endsWithPop = endsWith(searchTermTwo);
    const searchStrTwo = 'Blues Rock Pop';
    expect(endsWithPop(searchStrTwo)).to.be.true;
  });
});
