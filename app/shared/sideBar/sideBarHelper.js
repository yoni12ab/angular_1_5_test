(function (params) {
    angular.module("app.sideBar").
    service("sideBarHelper",sideBarHelperFunc);
    function sideBarHelperFunc() {
        this.getBarLinks =function (){ 
            return [{
                        name : "link1" ,
                        image : "app/img/spore-icon-svg.svg",
                        href : ""
                    },
                    {
                        name : "link2" ,
                        image : "app/img/spore-icon-svg.svg",
                        href : ""
                    },
                    {
                        name : "link3" ,
                        image : "app/img/spore-icon-svg.svg",
                        href : ""
                    },
                    {
                        name : "link4" ,
                        image : "app/img/spore-icon-svg.svg",
                        href : ""
                    },
                    
                   ];
        }
    }
    
    
    
})();