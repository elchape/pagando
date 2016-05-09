angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  
      
        
    .state('ingresar', {
      url: '/login',
      templateUrl: 'templates/ingresar.html'
    })
        
      
    
      
        
    .state('registrarse', {
      url: '/signup',
      templateUrl: 'templates/registrarse.html'
    })
        
      
    
      
    .state('menu', {
      url: '/side-menu',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('menu.pagar', {
      url: '/pay',
      views: {
        'side-menu21': {
          templateUrl: 'templates/pagar.html'
        }
      }
    })
        
      
    
      
        
    .state('ingresarPago', {
      url: '/payment',
      templateUrl: 'templates/ingresarPago.html'
    })
        
      
    
      
        
    .state('menu.historialDePagos', {
      url: '/history',
      views: {
        'side-menu21': {
          templateUrl: 'templates/historialDePagos.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.datosPersonales', {
      url: '/personalData',
      views: {
        'side-menu21': {
          templateUrl: 'templates/datosPersonales.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.tarjetasDeCrDito', {
      url: '/cards',
      views: {
        'side-menu21': {
          templateUrl: 'templates/tarjetasDeCrDito.html'
        }
      }
    })
        
      
    
      
        
    .state('valorarLocal', {
      url: '/review',
      templateUrl: 'templates/valorarLocal.html'
    })
        
      
    
      
        
    .state('agregarTarjeta', {
      url: '/agregarTarjeta',
      templateUrl: 'templates/agregarTarjeta.html'
    })
        
      
    
      
        
    .state('pinVerificacion', {
      url: '/ingresarPin',
      templateUrl: 'templates/pinVerificacion.html'
    })
  
  .state('encontrarLocal.mapa', {
      url: '/vistaMapa',
      views: {
        'tab1': {
          templateUrl: 'templates/mapa.html'
        }
      }
    })
        
      
    
      
        
    .state('encontrarLocal.listado', {
      url: '/vistaLista',
      views: {
        'tab3': {
          templateUrl: 'templates/listado.html'
        }
      }
    })
        
      
    
      
    .state('encontrarLocal', {
      url: '/encontrarLocal',
      abstract:true,
      templateUrl: 'templates/encontrarLocal.html'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/login');
  

  

});