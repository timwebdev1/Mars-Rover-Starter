const Command = require("./command");
const Message = require("./message");

class Rover {
  constructor(position, mode = "NORMAL", generatorWatts = 110) {
    this.position = position;
    this.mode = mode;
    this.generatorWatts = generatorWatts;
  };

  receiveMessage(message) {

    const results = [];

    if (message.commands) {
      for (let command of message.commands) {
        if (command.commandType === "STATUS_CHECK") {
          results.push({
            completed: true,
            roverStatus: {
              position: this.position,
              mode: this.mode,
               generatorWatts: this.generatorWatts
            }
          });
        } else if (command.commandType === "MODE_CHANGE") {
          // results.push(command);
          this.mode = command.value;
          results.push({ completed: true });


        }
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
