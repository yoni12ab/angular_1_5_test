
var appHome = angular.module('app.home', []);
require("./homeHelper.js");
appHome.controller('homeCtrl',['homeHelper','$scope',function(homeHelper,$scope){
	this.welcomeText = 'Welcome to myApp Home 1 2!';
	$scope.movies ;
	$scope.justUpdate = 1;
	this.page=1; 
	this.take=10;
	this.getMovies = function () {
		if(this.page < 1){
			this.page - 1;
		}
		
		var skip = this.page * (this.page -1);
		
		homeHelper.getMovies(skip,this.take).then(function (data) {
			console.log("movies",data.data);
			
			$scope.movies =data.data;
			$scope.justUpdate = 2;
		});
	}
	this.init = function () {
		if(this.page < 1){
			this.page = 1;
		}
		this.getMovies();
	}

	this.init();
	
	 this.infiniteItems = {
          numLoaded_: 0,
          toLoad_: 0,
          // Required.
          getItemAtIndex: function(index) {
			  debugger
            if (index > this.numLoaded_) {
              this.fetchMoreItems_(index);
              return null;
            }
            return index;
          },
          // Required.
          // For infinite scroll behavior, we always return a slightly higher
          // number than the previously loaded items.
          getLength: function() {
			  debugger
            return this.numLoaded_ + 5;
          },
          fetchMoreItems_: function(index) {
            // For demo purposes, we simulate loading more items with a timed
            // promise. In real code, this function would likely contain an
            // $http request.
			debugger;
            this.page = index;
			this.getMovies();
          }
        };
	
	
	
}]);