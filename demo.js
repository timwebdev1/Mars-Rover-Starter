const Rover =  require('./rover');
const Message = require('./message.js');
const Command = require('./command.js');

// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let message = new Message('Test message with two commands', commands);
// let rover = new Rover(98382);    // Passes 98382 as the rover's position.
// let response = rover.receiveMessage(message);

    const name = "TEST_NAME";
    const commands = [
      new Command("FIRST_COMMAND"),
      new Command("SECOND_COMMAND", "MOVE_FORWARD"),
    ];
    const message = new Message(name, commands);
    const rover = new Rover(12345);
    const response = rover.receiveMessage(message);
    // The commands are not being pushed into array


console.log(response);
console.log("------------------------");
console.log(response.results);
console.log("------------------------");
