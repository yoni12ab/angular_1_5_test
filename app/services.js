angular.module('app.services',[])
.factory('servicesFactory', function ($rootScope) {
 
    var ret = {};
    // factory function body that constructs shinyNewServiceInstance
    ret.message1 = "Service 1"
    return ret;
});
