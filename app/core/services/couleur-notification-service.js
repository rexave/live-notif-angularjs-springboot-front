'use strict';

angular.module('myApp.services', [])
	.service("couleurNotificationService", ['$http', function ($http) {
		var service = {
			changerCouleur: changerCouleur,
			subscribe: subscribe
		};

		function changerCouleur(nouvelleCouleur) {
			console.log("changement demandé", nouvelleCouleur);
			return true;
		}

		function subscribe() {
			console.log("abonnement demandé");
		}

		return service;
	}]);
