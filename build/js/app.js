angular.module('mailApp', ['ui.router', 'firebase'])
	
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
			.state('outbox', {
				url: "/outbox",
				templateUrl: "views/outbox.html",
				controller: "outboxCtrl",
				controllerAs: "outbox"
			})
			.state('trash', {
				url: "/trash",
				templateUrl: "views/trash.html",
				controller: "trashCtrl",
				controllerAs: "trash"
			})
			.state('write', {
				url: "/write",
				templateUrl: "views/write.html",
				controller: "writeCtrl",
				controllerAs: "write"
			})
	}])