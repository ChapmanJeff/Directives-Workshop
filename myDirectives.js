var app = angular.module('myDirectives', []);

app.directive('pending', function() {		//make sure you link to index but not html
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