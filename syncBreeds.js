// data in memory
const catBreeds = {
  'Balinese' : "Balinese are curious, outgoing, intellignet cast with excellent communication skills.",
  'Bombay' : "The golden eyes and the shiny black coat of the Bombay is absolutely striking.",
};

// synchronous funciton tto fetch a cat breed

const breedDetails = function(breed) {
  // can simply return it
  return catBreeds[breed];
};

// get return value right away from the function
const bombay = breedDetails('Bombay');
console.log(bombay); // => prints out hte description of breed

module.exports = breedDetails;