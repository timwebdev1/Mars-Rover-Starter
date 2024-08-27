const Rover = require("../rover.js");
const Message = require("../message.js");
const Command = require("../command.js");

describe("Rover class", function () {
  // TEST 7
  it("constructor sets position and default values for mode and generatorWatts", function () {
    const position = 190;
    const rover = new Rover(position);
    expect(rover.position).toBe(190);
    expect(rover.mode).toBe("NORMAL");
    expect(rover.generatorWatts).toBe(110);
  });

  // TEST 8
  it("response returned by receiveMessage contains the name of the message", function () {
    const name = "TEST_NAME";
    const message = new Message(name);
    const rover = new Rover(12345);
    const response = rover.receiveMessage(message);

    expect(response.message).toBe("TEST_NAME");
  });

  // TEST 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    const name = "TEST_NAME";
    const commands = [
      new Command("STATUS_CHECK"),
      new Command("MODE_CHANGE", "LOW_POWER"),
    ];
    const message = new Message(name, commands);
    const rover = new Rover(12345);
    const response = rover.receiveMessage(message);

    expect(response.results.length).toBe(2);
  });

  // TEST 10
  it("responds correctly to the status check command", function () {
    const rover = new Rover(12345);
    const name = "Status_Check test message";
    const commands = [new Command("STATUS_CHECK")];
    const message = new Message(name, commands);
    const response = rover.receiveMessage(message);

    expect(response.results[0].roverStatus.position).toBe(12345);
    expect(response.results[0].roverStatus.mode).toBe("NORMAL");
    expect(response.results[0].roverStatus.generatorWatts).toBe(110);
  });

  // TEST 11
  it("responds correctly to the mode change command", function () {
    const rover = new Rover(12345);
    const name = "Mode Change command check";
    const commands = [new Command("MODE_CHANGE", "LOW_POWER")];
    const message = new Message(name, commands);
    const response = rover.receiveMessage(message);

    expect(response.results[0].completed).toBe(true);
    expect(rover.mode).toBe("LOW_POWER");
  });

  // TEST 12
  it("responds with a false completed value when attempting to move in LOW_POWER mode", function () {
    const rover = new Rover(100);
    const name = "Command to move in low power mode.";
    const commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("MOVE", 123),
    ];
    const message = new Message(name, commands);
    const response = rover.receiveMessage(message);

    expect(response.results[1].completed).toBe(false);
    expect(rover.position).toBe(100);
  });

  // TEST 13
  it("responds with the position for the move command", function () {
    const rover = new Rover(100);
    const name = "Move command test";
    const commands = [new Command("MOVE", 123), [new Command("STATUS_CHECK")]];
    const message = new Message(name, commands);
    const response = rover.receiveMessage(message);

    expect(response.results[0].roverStatus.position).toBe(100);
  });
});
