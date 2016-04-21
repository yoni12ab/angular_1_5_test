angular.module('app.services',[])
.factory('servicesFactory', ['$http',function ($http ) {
    var baseDomain = "http://surfvideoswcf.argovi1.info/";
    var baseUrl = baseDomain+"Service1.svc/";
    var ret = {};
   
    // factory function body that constructs shinyNewServiceInstance
    ret.message1 = "Service Dima Bolshoy 1";
    
    ret.getMovies = function(skip,take){
        return $http.get(baseUrl + "videos?skip="+skip+"&take="+take);
        
    }
    
    
    
    return ret;
}]);
