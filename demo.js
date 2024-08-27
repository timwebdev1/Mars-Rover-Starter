const Rover =  require('./rover');
const Message = require('./message.js');
const Command = require('./command.js');

// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let message = new Message('Test message with two commands', commands);
// let rover = new Rover(98382);    // Passes 98382 as the rover's position.
// let response = rover.receiveMessage(message);

    const rover = new Rover(100);
    const name = "Command to move in low power mode.";
    const commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("MOVE", 123),
    ];
    const message = new Message(name, commands);
    const response = rover.receiveMessage(message);


console.log(message.commands);

console.log(response);
console.log("------------------------");
console.log(response.results);
console.log("------------------------");
