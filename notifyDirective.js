var app = angular.module('notifyDirective', []);

app.directive('notify', function() {
	return {
		restrict: 'AE',

		scope: {
			title: '=',
			body: '=',
			icon: '='
		},

		link: function(scope, elem, attrs) {
			var Notification = window.Notification || window.mozNotification || window.webkitNotification;
    	Notification.requestPermission(function (permission) {
                //console.log(permission);
      });

      elem.click(function () {
      	console.log(scope.title)
				var notification = new Notification(scope.title, {body: scope.body, icon: scope.icon});
				scope.title = 'test';
				console.log(scope.title);
      })
		},
	}
})