require('angular')
require('angular-ui-router');
require('angular-aria');
require('angular-animate');
require('angular-material');
require('./services.js');
require('./shared/sideBar/sideBar.js');
require('./shared/header/headerDirective.js');
require('./components/home/home.js');
require('./components/about/about.js');

angular.module('app', ['ui.router','ngMaterial','app.services','app.home','app.about','app.header','app.sideBar'])
/*
.controller('MainController', ['$scope', 'servicesFactory',function ($scope, servicesFactory) {
    $scope.message = servicesFactory.message1;
}]);
*/

.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/");
	
	$stateProvider
	.state('home', {
		url: "/",
		views : {
			"" : {
				templateUrl:"app/components/home/home.html"
			}/*,
			"header@home":{
				templateUrl:"app/shared/header/header.html"
			}*/
		}
	})
	.state('about', {
		url: "/about",
		views : {
			"" : {
				templateUrl:"app/components/about/about.html"
			}/*,
			"header@about":{
				templateUrl:"app/shared/header/header.html"
			}*/
		}
	});
});