const { expect } = require('chai');
const moveListItem = require('../02_moveListItem');

describe('moveListItem', () => {
  it('should move item to desired index', () => {
    const list = ['Emo', 'Soul', 'Punk'];
    const from = 0;
    const to = 1;
    expect(moveListItem(from, to, list)).to.deep.equal(['Soul', 'Emo', 'Punk']);
  });
  it('should rotate indexes when provided one higher than the length of the array', () => {
    const list = ['Emo', 'Soul', 'Punk'];
    const from = 3;
    const to = 4;
    expect(moveListItem(from, to, list)).to.deep.equal(['Soul', 'Emo', 'Punk']);
  });
  it('should not mutate the original list', () => {
    const list = ['Emo', 'Soul', 'Punk'];
    const from = 2;
    const to = 1;
    const output = moveListItem(from, to, list);
    expect(list).to.deep.equal(['Emo', 'Soul', 'Punk']);
    expect(output).to.deep.equal(['Emo', 'Punk', 'Soul']);
    expect(output).to.not.equal(list);
  });
});
