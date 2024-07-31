const Command = require('../command.js');
describe("Command class", function() {
// TEST 1
  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

});


// TEST 2


// TEST 3