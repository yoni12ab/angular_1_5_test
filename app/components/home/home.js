
var appHome = angular.module('app.home', []);
require("./homeHelper.js");
appHome.controller('homeCtrl',['homeHelper','$scope','$mdDialog',
						function(homeHelper,$scope,$mdDialog){
	var homeCtrl = this;
	this.welcomeText = 'Welcome to myApp Home 1 2!';
	//$scope.movies ;
	$scope.justUpdate = 1;
	this.page=0; 
	this.take=25;
	
	this.showDialog = function ($event,clickedItem) {
      debugger
       $mdDialog.show({
         targetEvent: $event,
		  title: clickedItem.Title,
         template:
          '<md-dialog >' +
            '<md-dialog-content>'+
				//'<div ng-bind-html="clickedItem.Embed" >  </div> '+
				clickedItem.Embed.replace("WIDTH","100%").replace("HEIGHT","100%") +	
				 
			'</md-dialog-content>' +
			'  <md-dialog-actions>' +
            '    <md-button ng-click="closeDialog()" class="md-primary">' +
            '      Close' +
            '    </md-button>' +
            '  </md-dialog-actions>' +
            '</md-dialog>'
		 ,
		 controller: function DialogController($scope, $mdDialog,clickedItem) {
            $scope.closeDialog = function() {
              $mdDialog.hide();
            }
			$scope.clickedItem = clickedItem;
          },
         locals: {
           clickedItem: clickedItem
         }
       
      });
	}
	
	this.getMovies = function () {
		if(this.page < 1){
			this.page - 1;
		}
		
		var skip = this.take * (this.page -1);
		
		return  homeHelper.getMovies(skip,this.take);
		/*.then(function (data) {
			console.log("movies",data.data);
			
			$scope.movies =data.data;
			$scope.justUpdate = 2;
		});
		*/
	}
	
	this.init = function () {
		// if(this.page < 1){
		// 	this.page = 1;
		// }
		// this.getMovies();
	}

	this.init();
	
	 this.infiniteItems = {
          numLoaded_: 0,
          toLoad_: 0,
		  items:[],
          // Required.
          getItemAtIndex: function(index) {
			
            if (index > this.numLoaded_) {
              this.fetchMoreItems_(index);
              return null;
            }
            return this.items[index];
          },
          // Required.
          // For infinite scroll behavior, we always return a slightly higher
          // number than the previously loaded items.
          getLength: function() {
		    return this.numLoaded_ + 5;
          }, 
          fetchMoreItems_: function(index) {
            // For demo purposes, we simulate loading more items with a timed
            // promise. In real code, this function would likely contain an
            // $http request.
			if (this.toLoad_ < index) {
              	this.toLoad_ += homeCtrl.take;
				
				homeCtrl.page++; 
				homeCtrl.getMovies().then(angular.bind(this, function (data) {
					 var retItems = data.data;
					 console.log("movies",retItems);
					 var outerItems = this.items;
					 retItems.map(function(obj){
						 outerItems.push(obj);
						 
					 });
                    
					  this.numLoaded_ = this.toLoad_;
				}));
			}
          }
        };
	
	
	
}]);