function inboxCtrl(inboxService) {
	var vm = this;
	vm.messages = [];

	vm.getMessages = function() {
		vm.messages = inboxService.messages;
	};
	vm.getMessages();

	vm.deleteMessage = function(index) {
		inboxService.deleteMessage(index);
	};

};

angular.module('mailApp')
	.controller('inboxCtrl', ['inboxService', inboxCtrl]);