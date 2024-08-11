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
});
  
  // TEST 8
// it("response returned by receiveMessage contains the name of the message", function() {
//   const message = new Message('Test message with two commands', commands);
//   const results [new Command('MODE_CHANGE', 'LOW_POWER'),];
//   expect(receiveMessage(message)).toBe(message);
// } )

  // TEST 9


  // TEST 10


  // TEST 11


  // TEST 12


  // TEST 13


});
