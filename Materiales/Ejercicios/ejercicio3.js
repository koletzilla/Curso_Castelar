var express = require('express');
var app     = express();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);
var five    = require("johnny-five");

// Static files
app.use(express.static(__dirname + '/ejercicio3'));

var five = require("johnny-five"),
  board, button;

  var estadoLed = false;

board = new five.Board();

board.on("ready", function() {

  button = new five.Button(2);
  var led = new five.Led(13);

  /**************************** EDITA DESDE AQUÍ ******************************/

  /**************************** EDITA HASTA AQUÍ ******************************/

  board.repl.inject({
    button: button
  });

  button.on("down", function() {
    console.log("down");
    estadoLed = true;
    io.sockets.emit('led', {estado: estadoLed});
    led.on()
  });

  button.on("hold", function() {
    console.log("hold");
  });

  // "up" the button is released
  button.on("up", function() {
    console.log("up");
    estadoLed = false;
    io.sockets.emit('led', {estado: estadoLed});
    led.off();
  });

  /**************************** EDITA DESDE AQUÍ ******************************/

  /**************************** EDITA HASTA AQUÍ ******************************/
});

io.on('connection', function (socket) {
    console.log(socket.id);
    socket.emit('led', {estado: estadoLed});
});

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
