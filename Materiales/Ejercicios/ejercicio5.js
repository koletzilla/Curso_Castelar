var five = require("johnny-five"),
  board, button;

board = new five.Board();

board.on("ready", function() {

  button = new five.Button(2);
  var led1 = new five.Led(7);
  var led2 = new five.Led(8);
  var led3 = new five.Led(9);

  board.repl.inject({
    button: button
  });
var stop = 0

  button.on("down", function() {
    console.log("down");
    if(stop == 0){
    led1.on()
    setTimeout(function(){
      led2.on()
      setTimeout(function(){
        led3.on()
      }, 500);
    }, 500);
  } else {
    led1.off();
    led2.off();
    led3.off();
  }
  if (stop == 1)
    stop = 0
  else
    stop = 1
  });

  button.on("hold", function() {
    console.log("hold");
  });

  // "up" the button is released
  button.on("up", function() {
    console.log("up");

  });
});
