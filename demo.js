const Rover =  require('./rover');
const Message = require('./message.js');
const Command = require('./command.js');

// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let message = new Message('Test message with two commands', commands);
// let rover = new Rover(98382);    // Passes 98382 as the rover's position.
// let response = rover.receiveMessage(message);

    const rover = new Rover(12345);
    const name = "Status_Check test message";
    const commands = [new Command("STATUS_CHECK")];
    const message = new Message(name, commands);
const response = rover.receiveMessage(message);
    
console.log(response);
console.log(response.results);