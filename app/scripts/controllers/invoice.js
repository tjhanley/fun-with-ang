'use strict';

/**
 * @ngdoc function
 * @name angInvoiceApp.controller:InvoiceCtrl
 * @description
 * # InvoiceCtrl
 * Controller of the angInvoiceApp
 */
  app.controller('InvoiceCtrl', ["$scope", "invoices",
    function($scope, invoices) {
      $scope.invoices = invoices;

      $scope.addInvoice = function(){
        console.debug($scope);
        $scope.invoices.$add({
          vendor: $scope.vendor,
          date: Date.now(),
          description: $scope.description
        });
        $scope.vendor = '';
        $scope.date = '';
        $scope.description = '';
      }
    }
]);
