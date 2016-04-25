(function () {
   
    angular.module("app.header")
    .controller("headerController",['$mdSidenav',Controller]);
    function Controller( $mdSidenav) {
       this.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };
    }
})();