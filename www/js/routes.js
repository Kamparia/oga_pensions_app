angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.ogaPensions', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/ogaPensions.html',
        controller: 'ogaPensionsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.pensionCalculator'
      2) Using $state.go programatically:
        $state.go('tabsController.pensionCalculator');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
  */
  .state('tabsController.pensionCalculator', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/pensionCalculator.html',
        controller: 'pensionCalculatorCtrl'
      },
      'tab2': {
        templateUrl: 'templates/pensionCalculator.html',
        controller: 'pensionCalculatorCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.results'
      2) Using $state.go programatically:
        $state.go('tabsController.results');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page5
      /page1/tab2/page5
  */
  .state('tabsController.results', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/results.html',
        controller: 'resultsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/results.html',
        controller: 'resultsCtrl'
      }
    }
  })

  .state('success', {
    url: '/page6',
    templateUrl: 'templates/success.html',
    controller: 'successCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.openAccount'
      2) Using $state.go programatically:
        $state.go('tabsController.openAccount');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page4
      /page1/tab3/page4
  */
  .state('tabsController.openAccount', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/openAccount.html',
        controller: 'openAccountCtrl'
      },
      'tab3': {
        templateUrl: 'templates/openAccount.html',
        controller: 'openAccountCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});