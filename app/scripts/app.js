'use strict';

/**
 * @ngdoc overview
 * @name angInvoiceApp
 * @description
 * # angInvoiceApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angInvoiceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
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

app.factory("invoices", ["$firebaseArray",
  function($firebaseArray) {
    // create a reference to the database location where we will store our data
    var ref = new Firebase("https://scorching-heat-308.firebaseio.com/invoices");

    // this uses AngularFire to create the synchronized array
    return $firebaseArray(ref);
  }
]);
