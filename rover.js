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
      message: message.name,
      results: results
    };

    if (Command === "STATUS_CHECK") {
      return response;
    }; //i need to return the status of the rover here, no changes
 
      
    return response;
  }

}

module.exports = Rover;
