const assert = require('chai').assert;
const breedDetails = require('../syncBreeds')

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    const expectedDescription = "The golden eyes and the shiny black coat of the Bombay is absolutely striking."
    const bombay = breedDetails('Bombay')
    assert.equal(expectedDescription, bombay)
  })
})