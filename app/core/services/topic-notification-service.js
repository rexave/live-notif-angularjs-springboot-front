'use strict';

angular.module('myApp.services')
	.service("topicNotificationService", ['$http', '$q', 'webSocketService', function ($http, $q, webSocketService) {
		var service = {
			connexionAuTopicAvecCallback: connexionAuTopicAvecCallback,
			envoyerMessage: envoyerMessage,
		};

		function envoyerMessage(topic, message, auteur) {
			console.log("envoyerMessage", topic, message, auteur);
			var defer = $q.defer();
			$http.get("/api/notification/publier/" + topic + "/" + message + "/" + auteur)
				.then(function (data) {
					defer.resolve(data);
				}, function (data) {
					defer.reject(data);
				});
			return defer.promise;
		}

		function connexionAuTopicAvecCallback(topic, callback) {
			console.log("abonnement demandé au topic", topic);
			return webSocketService.connexion('/topic/'+topic, callback);
		}

		return service;
	}]);
