'use strict';

/**
 * @ngdoc function
 * @name angInvoiceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angInvoiceApp
 */
  app.controller('MainCtrl', ["$scope", "invoices",
    function ($scope, invoices) {
      $scope.invoices = invoices;
  }]);
