const { expect } = require('chai');
const updateDataObj = require('../04_updateDataObj');

describe('updateDataObj', () => {
  it('should return dataObj if nothing passed to update', () => {
    const artist = {
      artist_name: "Fat Freddy's Drop",
      label: 'The Drop',
      formed: 1999,
      origin: 'Wellington, New Zealand',
      no_of_members: 7,
    };
    const artistCopy = {
      artist_name: "Fat Freddy's Drop",
      label: 'The Drop',
      formed: 1999,
      origin: 'Wellington, New Zealand',
      no_of_members: 7,
    };
    const output = updateDataObj(artist);
    expect(output).to.deep.equal(artistCopy);
  });
  it('should update the data object with updates from second argument', () => {
    const artist = {
      artist_name: 'Foo Fighters',
      label: 'Roswell',
      formed: 1994,
      origin: 'Seattle, Washington',
      no_of_members: 4,
    };
    const update = {
      artist_name: 'Food Fighters',
      no_of_members: 6,
    };
    const output = updateDataObj(artist, update);
    expect(output).to.deep.equal({
      artist_name: 'Food Fighters',
      label: 'Roswell',
      formed: 1994,
      origin: 'Seattle, Washington',
      no_of_members: 6,
    });
  });
  it('should not add new properties that are not valid for the data', () => {
    const artist = {
      artist_name: "Des'ree",
      label: 'Epic Records',
      formed: 1991,
      origin: 'Croydon, London',
      no_of_members: 1,
    };
    const update = {
      favourite_food: 'Toast',
      favourite_show: 'Evening News',
    };
    const output = updateDataObj(artist, update);
    expect(output).to.deep.equal({
      artist_name: "Des'ree",
      label: 'Epic Records',
      formed: 1991,
      origin: 'Croydon, London',
      no_of_members: 1,
    });
  });
  it('should not mutate either input object', () => {
    const artist = {
      artist_name: 'Blink-182',
      label: 'Cargo Music',
      formed: 1992,
      origin: 'Poway, California',
      no_of_members: 3,
    };
    const update = {
      still_going: true,
      formed: 2009,
    };
    updateDataObj(artist, update);
    expect(artist).to.deep.equal({
      artist_name: 'Blink-182',
      label: 'Cargo Music',
      formed: 1992,
      origin: 'Poway, California',
      no_of_members: 3,
    });
    expect(update).to.deep.equal({
      still_going: true,
      formed: 2009,
    });
  });
});
