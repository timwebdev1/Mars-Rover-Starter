const Message = require('../message.js');
const Command = require('../command.js');

describe("Message class", function() {
// TEST 4
it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
  expect( function() { new Message();}).toThrow(new Error('Name required.'));
});

// TEST 5
it("constructor sets name", function() {
const name = 'SAMPLE_NAME';
const message = new Message(name);
expect(message.name).toBe(name);
})

// TEST 6
it("contains a commands array passed into the constructor as the 2nd argument", function () {
  const name = 'SOME_NAME';
  const commands = [new Command('COMMAND_TYPE', 'SOME_VALUE')];
  const message = new Message(name, commands);
  expect(message.commands).toBe(commands);
})

});
