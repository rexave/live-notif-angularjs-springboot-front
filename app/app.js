'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
	'ngRoute',
	'myApp.home',
	'myApp.couleurs',
	'myApp.services'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider
		.otherwise({redirectTo: '/home'});
	console.log("configured");
}]);

