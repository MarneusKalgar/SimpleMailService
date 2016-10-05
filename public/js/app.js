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
			.state('inboxedEmail', {
				url: "/inbox/email/:id",
				templateUrl: "views/inboxedEmail.html",
				controller: "inboxedEmailCtrl",
				controllerAs: "email"
			})
			.state('outbox', {
				url: "/outbox",
				templateUrl: "views/outbox.html",
				controller: "outboxCtrl",
				controllerAs: "outbox"
			})
			.state('outboxedEmail', {
				url: "/outbox/email/:id",
				templateUrl: "views/outboxedEmail.html",
				controller: "outboxedEmailCtrl",
				controllerAs: "outboxedEmail"
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