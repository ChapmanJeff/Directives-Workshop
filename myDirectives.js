var app = angular.module('myDirectives', []);

app.directive('pending', function($q) {		//make sure you link to index but not html
	return {
		restrict: 'AE',
		scope: {
			request: '&'
		},
		template: "<button ng-show='!spinner'>Submit</button><img src='http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif' style='width:25px; height:25px' ng-show='spinner'>",

		link: function(scope, elem, attrs) {
			// console.log(scope, elem, attrs);
			elem.bind("click", function() {
				scope.spinner = true;
				scope.request().then(function(res) {
					scope.spinner = false;
				})
			})
		}
	}
});

/* Other Solution:
app.directive('pending', function($q) {		//make sure you link to index but not html
	return {
		restrict: 'A',
		scope: {
			request: '&'
		},
		link: function(scope, elem, attrs) {
			var spinnerIcon = angular.element('<i class="fa fa-spinner'></i>);
			spinnerIcon.hide()l
			elem.after(spinnerIcon);

			var invokeRequest = function () {
				var dfd = $q.defer();

				dfd.resolve(scope.request());

				return dfd.promise;
			}

			elem.on('click', function() {
				elem.hide();
				setTimeout(function() {
				spinnerIcon.show();
				invokeRequest().then(function*( {
					elem.show();
					spinnerIcon.hide();
					}), 3000;
				}))
			})
		}

*/