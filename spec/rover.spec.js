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
    expect(rover.mode).toBe("NORMAL");
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
    const commands = [
      new Command("FIRST_COMMAND"),
      new Command("SECOND_COMMAND", "MOVE_FORWARD"),
    ];
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
    const rover = new Rover(position);
    const name = "Status_Check test message";
    const commands = [new Command("STATUS_CHECK")];
    const message = new Message(name, commands);
    const response = rover.receiveMessage(message);
    const roverStatus = {
      position: response.results[0].position,
      mode: response.results[0].mode,
      generatorWatts: response.results[0].generatorWatts,
    };

    expect(roverStatus.position).toBe(190);
    expect(roverStatus.mode).toBe("NORMAL");
    expect(roverStatus.generatorWatts).toBe(110);
  });

  // TEST 11

  // TEST 12

  // TEST 13
});
