function inboxCtrl(inboxService) {
	var vm = this;
	vm.messages = [];

	vm.getMessages = function() {
		inboxService.getMessages()
			.success(function(messages) {
				vm.messages = messages;
				console.log('messages returned to the controller', vm.messages);
			})
			.error(function() {
				console.log('messages returned failed');
			});
	};
	vm.getMessages();

	vm.deleteMessage = function(index) {
		inboxService.deleteMessage(index);
	};

};



angular.module('mailApp')
	.controller('inboxCtrl', ['inboxService', inboxCtrl]);