require('angular')
require('./services.js');

angular.module('app', [])
.controller('MainController', ['$scope', 'services',function ($scope, services) {
    $scope.message = "sdfsdf";
}]);