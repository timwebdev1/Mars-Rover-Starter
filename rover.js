const Message = require("./message");

class Rover {
  constructor(position) {
    this.position = position;
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }

  receiveMessage(message) {
   const response = {
      message: Message.name,
   };
  return response;

  }
}

module.exports = Rover;
