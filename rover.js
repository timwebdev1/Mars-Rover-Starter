const Command = require("./command");
const Message = require("./message");

class Rover {
  constructor(position) {
    this.position = position;
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }

  receiveMessage(message) {
    const results = [];
    const response = {
      message: Message.name,
      results: results[Command]
    };

 
      
    return response;
  }

}

module.exports = Rover;
