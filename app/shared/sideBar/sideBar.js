(function () {
   var appSideBar = angular.module("app.sideBar",[]);
    
    require("./sideBarHelper.js");
   
    appSideBar.directive("sideBarDirective",sideBarDirective);
    
    
    function sideBarDirective() {
        return {
            
            templateUrl : "app/shared/sideBar/sideBar.html"            
            
        };
    }
    
    appSideBar.controller("sideBarCtrl",["sideBarHelper",sideBarCtrl]);
     function sideBarCtrl(sideBarHelper) {
        this.barLinks ; 
        this.sideBarHelper = sideBarHelper;
        this.getBarLinks = function(){
                 this.barLinks = this.sideBarHelper.getBarLinks();  
        }
         
        
        this.init = function (){
            this.getBarLinks();
            
            
        }
        
        this.init();
        
        
        
    }
    
})();