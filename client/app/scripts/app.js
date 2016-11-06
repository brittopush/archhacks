'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/doctors', {
        templateUrl: 'views/doctors.html',
        controller: 'DoctorsCtrl'
      })
      .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('DoctorRestangular', function(Restangular){
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Doctor', function(DoctorRestangular) {
    return DoctorRestangular.service('doctor');
  })
  .factory('DetailRestangular', function(Restangular){
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Detail', function(DetailRestangular) {
    return DetailRestangular.service('detail');
  });
