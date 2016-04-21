
var appHome = angular.module('app.home', []);
require("./homeHelper.js");
appHome.controller('homeCtrl',['homeHelper',function(homeHelper){
	this.welcomeText = 'Welcome to myApp Home 1 2!';
	this.movies ;
	this.page=1;
	this.take=10;
	this.getMovies = function () {
		if(this.page < 1){
			this.page - 1;
		}
		
		var skip = this.page * (this.page -1);
		
		homeHelper.getMovies(skip,this.take).then(function (data) {
			console.log("movies",data);
			this.movies =data.data;
		});
	}
	this.init = function () {
		if(this.page < 1){
			this.page = 1;
		}
		this.getMovies();
	}

	this.init();
	
}]);