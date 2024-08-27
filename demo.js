const Rover =  require('./rover');
const Message = require('./message.js');
const Command = require('./command.js');

// Test provided in autograder
    // let rover = new Rover(100);
    // let commands = [
    //   new Command("MOVE", 4321),
    //   new Command("STATUS_CHECK"),
    //   new Command("MODE_CHANGE", "LOW_POWER"),
    //   new Command("MOVE", 3579),
    //   new Command("STATUS_CHECK"),
    // ];
    // let message = new Message("TA power", commands);
    // let response = rover.receiveMessage(message);


// Test provided by chapter
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("STATUS_CHECK"),
    ];
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(98382); // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);


    
console.log(message.commands);
console.log("------------------------");
console.log(response);
console.log("------------------------");
console.log(response.results);

