'use strict';

/**
 * @ngdoc overview
 * @name angInvoiceApp
 * @description
 * # angInvoiceApp
 *
 * Main module of the application.
 */
angular
  .module('angInvoiceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/invoice', {
        templateUrl: 'views/invoice.html',
        controller: 'InvoiceCtrl',
        controllerAs: 'invoice'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
