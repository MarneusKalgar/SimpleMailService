function outboxCtrl(outboxService) {
	var vm = this;
	vm.messages = [];

	vm.getMessages = function() {
		vm.messages = outboxService.messages;
	};
	vm.getMessages();

	vm.deleteMessage = function(index) {
		outboxService.deleteMessage(index);
	};

};

angular.module('mailApp')
	.controller('outboxCtrl', ['outboxService', outboxCtrl]);