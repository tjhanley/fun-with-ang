'use strict';

/**
 * @ngdoc function
 * @name angInvoiceApp.controller:InvoiceCtrl
 * @description
 * # Tree
 * Controller of the angInvoiceApp
 */
app.controller('TreeCtrl', ["$scope",
  function($scope) {
    $scope.dataset = [];
    $scope.dataset.push(['animal','bird']);
    $scope.dataset.push(['animal','cat']);
    $scope.dataset.push(['lifeform','animal']);
    $scope.dataset.push(['cat','lion']);
    $scope.dataset.push(['cat','panther']);
    $scope.dataset.push(['bird','eagle']);
    $scope.dataset.push(['bird','stork']);
    console.debug($scope.dataset);

    $scope.tree = new Object();
    var _dataset = {};

    $scope.buildTree = function(tree, label, node){
      if(!(label in $scope.tree)){
        console.debug(tree, label, node);
        if (!(tree[label])){
          console.log(node);
          tree[label] = node[0];
          $scope.buildTree(tree[label], node[0], node[1])
        } else {
          tree[label].push(node);
        }
      }
      console.log(tree);
    };

    $scope.dataset.forEach(function(x){
      if (_dataset[x[0]]){
        _dataset[x[0]].push(x[1]);
        _dataset[x[0]].theCount++;
      } else {
        _dataset[x[0]] = [x[1]];
        _dataset[x[0]].theCount = 1;
      }
    });

    console.debug(_dataset);

    var keys = Object.keys(_dataset);
    for(var i = 0; i < keys.length; i++){
      console.log(_dataset[keys[i]]);
      if(_dataset[keys[i]].theCount == 1){
        $scope.buildTree($scope.tree, keys[i], _dataset[keys[i]]);
        break;
      }
    }
  }
]);
