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
	.controller('topicCtrl', ['topicNotificationService', "$scope", "$timeout", function (topicNotificationService, $scope, $timeout) {

		var vm = this;

		$scope.topic = "topic1";
		$scope.auteur = "Bob";
		$scope.message = "coucou";

		$scope.envoyerMessage = envoyerMessage;
		$scope.abonnementAuTopic = abonnementAuTopic;


		function envoyerMessage(topic,message, auteur) {
			$scope.couleur = "changement en cours";
			var changerCouleur = topicNotificationService.envoyerMessage(topic,message,auteur);
			changerCouleur.then(function (response) {
				$scope.reponse = " [" + angular.toJson(response.data) + "]";
				$timeout(function () {
					$scope.reponse = "";
				}, 5000);
			});
		}


		function abonnementAuTopic(topicName) {
			topicNotificationService.connexionAuTopicAvecCallback(topicName, receptionMessage)
				.then(function (){
					$scope.connected = true;
				})
				.catch(function (error){
					$scope.connected = false;
					console.error(error);
				});
		}

		function receptionMessage(message){
			$scope.messages += angular.toJson(message);
		}

	}])
;

