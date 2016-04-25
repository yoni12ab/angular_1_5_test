(function (params) {
    angular.module("app.sideBar").
    service("sideBarHelper",sideBarHelperFunc);
    function sideBarHelperFunc() {
        this.getBarLinks =function (){ 
            return [{
                        name : "Home" ,
                        image : "home",
                        href : "/"
                    },
                    {
                        name : "TBD" ,
                        image : "build",
                        href : "/"
                    },
                    {
                        name : "TBD" ,
                        image : "build",
                        href : "/"
                    },
                    {
                        name : "TBD" ,
                        image : "build",
                        href : "/"
                    },
                    {
                        name : "TBD" ,
                        image : "build",
                        href : "/"
                    },
                    
                   ];
        }
    }
    
    
    
})();