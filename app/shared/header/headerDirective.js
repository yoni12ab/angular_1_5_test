(function () {
    angular.module("app.header",[])
    .directive("headerDirective",headerDirective);
    function headerDirective() {
        return {
            templateUrl : "app/shared/header/header.html"            
        };
    }
})();