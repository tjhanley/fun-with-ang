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

      $scope.lineItems = [{'id':'lineItem_s0'}];

      $scope.addNewLineItem = function(){
        var newLineItemNo = $scope.lineItems.length+1;
        $scope.lineItems.push({'id':'lineItem_'+newLineItemNo});
      };

      $scope.removeLineItem = function(index){
        $scope.lineItems.splice(index,1);
      }

      $scope.addInvoice = function(){
        $scope.invoices = invoices;
        $scope.invoices.$add({
          vendor: $scope.vendor,
          date: Date.now(),
          description: $scope.description,
          lineItems: $scope.lineItems
        });
        $scope.vendor = '';
        $scope.date = '';
        $scope.description = '';
        $scope.lineItems.length = 0;
      }
    }
]);
