
var app = angular.module('app', ['btford.socket-io'])

  .factory('mySocket', function (socketFactory) {
        return socketFactory();
    })

  .controller('MainController', function($scope,mySocket) {

    /**************************** EDITA DESDE AQUÍ ******************************/


    mySocket.on('led', function(data){
      if(data.estado)
        $scope.valorLed = "Encendido";
      else
        $scope.valorLed = "Apagado";
    });

      $scope.cambio = function() {
          console.log("cambio")
          mySocket.emit('led:cambio');
      }

    /**************************** EDITA HASTA AQUÍ ******************************/
})
