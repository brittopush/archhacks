'use strict';

angular.module('clientApp')
  .controller('DetailsCtrl', function ($scope, $rootScope, $location, Detail) {
    /*$rootScope.userDetails = [{
      name : 'Rajinikanth',
      username: 'SuperStar',
      password: 'Sivaji',
      age : 65,
      insuranceID : '1111A',
      insuranceCompany : 'Aetna',
      bloodGroup : 'A1-positive',
      contactNo : '9878887777',
      medHistory : 'None'
    },{
      name : 'Kamal Haasan',
      username: 'UlagaNayagan',
      password: 'Vikram',
      age : 60,
      bloodGroup: 'O-positive',
      insuranceID : '1111B',
      insuranceCompany : 'Aetna',
      contactNo : '9874231111',
      medHistory : 'None'
    }];*/

    $scope.userDetails = Detail.getList().$object;
    if(angular.isArray($scope.userDetails) && angular.isDefined($scope.userDetails[0])) {
      $scope.currentUser = angular.copy($scope.userDetails[0]);
      console.log($scope.currentUser);
    }
  });
