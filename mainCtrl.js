var app = angular.module('directiveWorkshop', ['myDirectives', 'notifyDirective']);

app.controller('mainCtrl', function($scope, mainService){
$scope.getData = function () {
        return mainService.getData($scope.query).then(function (data) {
           console.log(data);
           $scope.query = '';
           return $scope.data = data;
        });
    };
});