'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DoctorsCtrl', function ($scope, $location, Doctor) {
   /* $scope.doctorList = [{
            name : 'St Louis Children Hospital',
            mobile : 1111111111,
            url : 'http://www.stlouischildrens.org/our-services/physicians'
          },{
            name : 'Barnes-Jewish',
            mobile : 2222222222,
            url : 'https://www.barnesjewish.org/requestappointment'
          },{
            name : 'Kindred St Louis',
            mobile : 3333333333,
            url : 'http://www.kindredstlouis.com/contact-us/'
          }];
*/
    $scope.doctorList = Doctor.getList().$object;

    $scope.addDoc = function(newDoc){
      console.log(newDoc);
      $scope.addEntry = angular.copy(newDoc);
      Doctor.post($scope.addEntry).then(function(){
        $location.path('/doctors');
        window.location.reload();
      });
    };
  });
