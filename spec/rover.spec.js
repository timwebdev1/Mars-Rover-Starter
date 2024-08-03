const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

describe("Rover class", function() {

  // TEST 7
it("constructor sets position and default values for mode and generatorWatts", function() {
  const position = 12345;
  const mode = "NORMAL";
  const generatorWatts = 110;
  const rover = new Rover(position, mode, generatorWatts);
  expect(rover.position).toBe(position);
  expect(rover.mode).toBe(mode);
  expect(rover.generatorWatts).toBe(generatorWatts);
})
  
  // TEST 8


  // TEST 9


  // TEST 10


  // TEST 11


  // TEST 12


  // TEST 13


});
