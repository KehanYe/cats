const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile ..');
  fs.readFile(`./data/${breed}.txt`, 'utf-8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) functionToRunWhenThingsAreDone(data);
    if (error) functionToRunWhenThingsAreDone(undefined);
  });
};

const printOutCatBreed = breed => {
  console.log('Return Value:', breed);
};

module.exports = breedDetailsFromFile;