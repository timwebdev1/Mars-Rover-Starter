const Command = require("./command");
const Message = require("./message");

class Rover {
  constructor(position) {
    this.position = position;
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  };

  receiveMessage(message) {
    const results = [];

    if (message.commands) {
      for (let command of message.commands) {
        if (command.commandtype === "STATUS_CHECK") {
          results.push({
            completed: true,
            roverStatus: {
              position: this.position,
              mode: this.mode,
               generatorWatts: this.generatorWatts
            }
          });
        };
      };
    };

    const response = {
      message: message.name,
      results: results
    };

    
      
    return response;
  }

}

module.exports = Rover;
