require('angular')
require('./services.js');

angular.module('app', ['app.services'])
.controller('MainController', ['$scope', 'servicesFactory',function ($scope, servicesFactory) {
    $scope.message = servicesFactory.message1;
}]);