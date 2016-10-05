function outboxedEmailCtrl(outboxService, $stateParams) {
	var vm = this;
	vm.currentMessage = {};

	vm.getMessage = function() {
		outboxService.getMessage($stateParams.id);
	}
	vm.getMessage();

	vm.currentMessage = outboxService.message;
}

angular.module('mailApp')
	.controller('outboxedEmailCtrl', ['outboxService', '$stateParams', outboxedEmailCtrl]);