'use strict';

angular.module('myApp.topic', [])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/test-topic', {
				templateUrl: 'topic/topic.html',
				controller: 'topicCtrl',
				controllerAs: 'vm'
			});
	}])
	.controller('topicCtrl', ['topicNotificationService', "$scope", "$timeout", "$http",
		function (topicNotificationService, $scope, $timeout, $http) {

			var vm = this;

			$scope.topicName = "prive";
			$scope.auteur = "Bob";
			$scope.message = "coucou";

			$scope.connected = false;

			$scope.authenticated = "ko";
			$scope.username = "toto";
			$scope.password = "titi";
			$scope.reponseAuthent = "";

			$scope.envoyerMessage = envoyerMessage;
			$scope.abonnementAuTopic = abonnementAuTopic;

			$scope.authenticate = authenticate;


			function authenticate(user, pass) {
				console.log("authentification");
				$scope.authenticated = "wip";
				$http({
					method: 'POST',
					url: '/api/login',
					headers: {'Content-Type': 'application/x-www-form-urlencoded'},
					transformRequest: function (obj) {
						var str = [];
						for (var p in obj)
							str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
						return str.join("&");
					},
					data: {username: user, password: pass}
				}).then(function (data) {
					$scope.authenticated = "ok";
					$scope.reponseAuthent = " [" + angular.toJson(data) + "]";
					$timeout(function () {
						$scope.reponseAuthent = "";
					}, 5000);
				}, function (data) {
					$scope.authenticated = "ko";
					$scope.reponseAuthent = " [" + angular.toJson(data) + "]";
					$timeout(function () {
						$scope.reponseAuthent = "";
					}, 5000);
				});
			}

			function envoyerMessage(topic, message, auteur) {
				$scope.couleur = "changement en cours";
				var changerCouleur = topicNotificationService.envoyerMessage(topic, message, auteur);
				changerCouleur.then(function (response) {
					$scope.reponse = " [" + angular.toJson(response.data) + "]";
					$timeout(function () {
						$scope.reponse = "";
					}, 5000);
				});
			}


			function abonnementAuTopic(topicName) {
				topicNotificationService.connexionAuTopicAvecCallback(topicName, receptionMessage)
					.then(function () {
						$scope.connected = true;
					})
					.catch(function (error) {
						$scope.connected = false;
						console.error(error);
					});
			}

			function receptionMessage(message) {
				$scope.messages += angular.toJson(message);
			}

		}])
;

