function writeCtrl(inboxService) {
	vm = this;
	vm.message = {};

	vm.sendMessage = function() {
		inboxService.sendMessage(vm.message);
		vm.message.content = '';
	};
};

angular.module('mailApp')
	.controller('writeCtrl', ['inboxService', writeCtrl]);