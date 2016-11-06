'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $location, Detail) {
    $scope.newUser = {};
    $scope.addUser = function(newUser){
      console.log(newUser);
      $scope.newEntry = angular.copy(newUser);
      Detail.post($scope.newEntry).then(function(){
        $rootScope.currentUser = $scope.newEntry;
        $location.path('/details');
        //window.location.reload();
      });
    };
  });
