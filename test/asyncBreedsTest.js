const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');

describe('#breedDetailsFromFile', () => {
  
  it('provides, via callback, breed details from the Bombay breed', (done) => {
    breedDetailsFromFile('Bombay', (bombay) => {
      const expectedDescription = "The golden eyes and the shiny black coat of the Bombay is absolutely striking.";
      assert.equal(expectedDescription, bombay);
      done();
    });
    // console.log(breedDetailsFromFile)
  });

  it.only('provides, via callback, undefined for a breed that does not exist', (done) => {
    breedDetailsFromFile('Saphire', (desc) => {
      assert.equal(undefined, desc);
      done();
    });
  });

});