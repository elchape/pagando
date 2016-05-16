angular.module('app.controllers', ['ionic', 'ngCordova'])

    .controller('ingresarCtrl', function($scope) {

})

    .controller('registrarseCtrl', function($scope) {

})

    .controller('pagarCtrl', function($scope, $cordovaBarcodeScanner) {
    
        $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            alert(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };


})

    .controller('ingresarPagoCtrl', function($scope) {

})

    .controller('historialDePagosCtrl', function($scope) {

})

    .controller('datosPersonalesCtrl', function($scope) {

})

    .controller('tarjetasDeCrDitoCtrl', function($scope) {

})

    .controller('valorarLocalCtrl', function($scope, $ionicPopup, $location) {
    $scope.mostrarConfirmacion = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Confirmación de pago',
            template: 'Gracias por utilizar Pagando para sus pagos'
        });
        alertPopup.then(function() {
            $location.path('side-menu/history');
        });
    };
                
})

    .controller('agregarTarjetaCtrl', function($scope) {

})

    .controller('pinVerificacionCtrl', function($scope) {

    $scope.typedCode = 'Enter your code or scan';

    $scope.keyPressed = function(keyCode){

        tempT = $scope.typedCode;			

        switch(keyCode){
            case -4:
                $scope.sendTheCode();
                break;
            case -3:
                if(!/^\d+$/.test(tempT)){
                    return;
                }
                var codeLength = $scope.typedCode.length;
                if(codeLength == 1){
                    $scope.typedCode = 'Enter your code or scan';
                }else if(codeLength > 0){
                    $scope.typedCode = $scope.typedCode.substr(0, codeLength - 1);
                }
                break;
            case -1:
                $scope.sendEscape();
                break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 0:
                if(!/^\d+$/.test(tempT)){
                    $scope.typedCode = keyCode;
                }else{
                    $scope.typedCode += ''+keyCode;
                }
                break;

        }
    };

    $scope.sendEscape = function(){
        $scope.typedCode = 'Enter your code or scan';
        // TODO : sends the escape code
    };

    $scope.sendTheCode = function(){			
        if(/^\d+$/.test(tempT)){
            // TODO : sends the entered code
            console.log('entered code is ' + $scope.typedCode);
            $scope.typedCode = 'Enter your code or scan';
        }				
    };

    $scope.scanCode = function(){
        $scope.typedCode = 'Enter your code or scan';
        // TODO start scaning the code and once it receives send to the socket
    };
})

.controller('mapaCtrl', function($scope, $compile, $location) {
    
    
    ionic.Platform.ready(function() { 
        $scope.goPayment = function() {
            $location.path('side-menu/history');
        };
              
    
    var myLatlng = new google.maps.LatLng(34.603711, -58.381585);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
            
            google.maps.event.addListener(myLocation, 'click', function() {
                infowindow.open(map,myLocation);
            });
        });
 
          
        var contentString = "<div><a ng-click='clickTest()'>Pagar Aqui!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

      $scope.map = map;

          $scope.clickTest = function() {
        $location.path('side-menu/pay');
      };
    
    
        
    }); 
    })
   
.controller('listadoCtrl', function($scope) {

})
