const Message = require('../message.js');
const Command = require('../command.js');

describe("Message class", function() {
// TEST 4
it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
  expect( function() { new Message();}).toThrow(new Error('Name required.'));
});

// TEST 5


// TEST 6


});
