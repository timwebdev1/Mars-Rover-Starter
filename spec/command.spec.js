const Command = require('../command.js');
describe("Command class", function() {
// TEST 1
  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

  // TEST 2
  it("constructor sets command type", function() {
    const commandType = 'SOME_COMMAND_TYPE';
    const command = new Command(commandType);
    expect(command.commandType).toBe(commandType);
  })

// TEST 3
it("constructor sets a value passed in as the 2nd argument", function() {
  const commandType = 'COMMAND_TYPE';
  const value = 'SOME_VALUE';
  const command = new Command(commandType, value);
  expect(command.value).toBe(value);
})

});





