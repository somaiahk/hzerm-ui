'use strict';

angular.module('hzerm')

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeCtrl'
    })
    .when('/about', {
        templateUrl: '/templates/about.html',
        controller: 'AboutCtrl'
    })
    .when('/contact', {
        templateUrl: '/templates/contact.html',
        controller: 'ContactCtrl'
    })
    .when('/hzerm', {
        templateUrl: '/templates/hzerm.html',
        controller: 'HzermAppCtrl'
    })
    .otherwise({ redirectTo: '/' });
}]);