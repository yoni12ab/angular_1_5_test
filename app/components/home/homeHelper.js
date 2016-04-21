(function(params) {
	angular.module('app.home')
	.service('homeHelper',['servicesFactory',function(servicesFactory){
		this.getMovies = function (skip,take) {
				return servicesFactory.getMovies(skip,take);
		};
	}]);
})();
