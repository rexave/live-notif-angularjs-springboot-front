'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
	'ngRoute',
	'ngStomp',
	'myApp.home',
	'myApp.couleurs',
	'myApp.services',
	'myApp.components',
	'myApp.ws'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider
		.otherwise({redirectTo: '/home'});
	console.log("configured");
}]);

