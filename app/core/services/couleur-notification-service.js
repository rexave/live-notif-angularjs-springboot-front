'use strict';

angular.module('myApp.services', [])
	.service("couleurNotificationService", ['$http', function ($http) {
		var service = {
			changerCouleur: changerCouleur,
			abonnementAuxCouleurs: abonnementAuxCouleurs
		};

		function changerCouleur(nouvelleCouleur) {
			console.log("changement demandé", nouvelleCouleur);
			return true;
		}

		function abonnementAuxCouleurs() {
			console.log("abonnement demandé");
		}

		return service;
	}]);
