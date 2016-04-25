(function () {
   
    var appHeader = angular.module("app.header",[]);
    require("./header.js");
    appHeader.directive("headerDirective",headerDirective);
    function headerDirective() {
        return {
            templateUrl : "app/shared/header/header.html"            
        };
    }
})();