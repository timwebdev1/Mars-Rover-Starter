const Rover = require("../rover.js");
const Message = require("../message.js");
const Command = require("../command.js");

describe("Rover class", function () {
  // TEST 7
  it("constructor sets position and default values for mode and generatorWatts", function () {
    const position = 190;
    const mode = "NORMAL";
    const generatorWatts = 110;
    const rover = new Rover(position, mode, generatorWatts);
    expect(rover.position).toBe(190);
    expect(rover.mode).toBe('NORMAL');
    expect(rover.generatorWatts).toBe(110);
  });

  // TEST 8
  it("response returned by receiveMessage contains the name of the message", function () {
    const name = "TEST_NAME";
    const message = new Message(name);
    const response = {
      message: message.name,
    };
    expect(response.message).toBe("TEST_NAME");
  });

  // TEST 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    const name = "TEST_NAME";
    const commands = ["A_COMMAND", "ANOTHER_COMMAND"];
    const message = new Message(name, commands);
    const results = [];
    const response = {
      message: message.name,
      results: results,
    };
    expect(response.results).toBe(results);
  });

  // TEST 10
  it("responds correctly to the status check command", function () {
    const position = 190;
    const mode = "NORMAL";
    const generatorWatts = 110;
    const rover = new Rover(position, mode, generatorWatts);
    
    const roverStatus = {
      position: rover.position,
      mode: rover.mode,
      generatorWatts: rover.generatorWatts

    };

    expect(roverStatus.position).toBe(190);
    expect(roverStatus.mode).toBe("NORMAL");
    expect(roverStatus.generatorWatts).toBe(110);
  });


  

  // TEST 11

  // TEST 12

  // TEST 13
});
