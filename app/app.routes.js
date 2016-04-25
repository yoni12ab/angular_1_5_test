﻿(function(){
angular.module('app.router', ['ui.router']).config(routerConfig);
function routerConfig($stateProvider, $urlRouterProvider) {
	
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
}

})();