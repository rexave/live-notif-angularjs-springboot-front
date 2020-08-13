'use strict';

angular.module('myApp.services', [])
	.service("couleurNotificationService", ['$http', '$q', function ($http, $q) {
		var service = {
			changerCouleur: changerCouleur,
			subscribe: subscribe
		};

		function changerCouleur(nouvelleCouleur) {
			console.log("changement demandé", nouvelleCouleur);
			var defer = $q.defer();
			$http.get("http://localhost:9999/couleur/activer/" + nouvelleCouleur)
				.then(function (data) {
					defer.resolve(data);
				}, function (data) {
					defer.reject(data);
				});
			return defer.promise;
		}

		function subscribe() {
			console.log("abonnement demandé");
		}

		return service;
	}]);
