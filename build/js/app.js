angular.module('mailApp', ['ui.router'])
	
	.config(['$logProvider', '$stateProvider', '$urlRouterProvider', function($logProvider, $stateProvider, $urlRouterProvider) {
		
		$logProvider.debugEnabled(true);

		$urlRouterProvider.otherwise('/');

		$stateProvider

			.state('inbox', {
				url: "/",
				templateUrl: "views/inbox.html",
				controller: "inboxCtrl",
				controllerAs: "inbox"
			})
			.state('email', {
				url: "/inbox/email/:id",
				templateUrl: "views/email.html",
				controller: "emailCtrl",
				controllerAs: "email"
			})
			.state('write', {
				url: "/inbox/write",
				templateUrl: "views/write.html",
				controller: "writeCtrl",
				controllerAs: "write"
			})
	}])