var five = require("johnny-five"),
  board, button;

board = new five.Board();

board.on("ready", function() {

  button = new five.Button(2);
  var led = new five.Led(13);

  board.repl.inject({
    button: button
  });


  button.on("down", function() {
    console.log("down");
    led.on()
  });

  button.on("hold", function() {
    console.log("hold");
  });

  // "up" the button is released
  button.on("up", function() {
    console.log("up");
    led.off();
  });
});
