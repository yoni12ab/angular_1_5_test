require('angular')
require('angular-ui-router');
require('angular-sanitize');
require('angular-aria');
require('angular-animate');
require('angular-material');
require('./app.routes.js');
require('./services.js');
require('./shared/sideBar/sideBar.js');
require('./shared/header/headerDirective.js');
require('./components/home/home.js');
require('./components/about/about.js');

angular.module('app', ['ngMaterial','ngSanitize','app.router','app.services','app.home','app.about','app.header','app.sideBar'])
.config(function($mdIconProvider) {
    $mdIconProvider
       .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
       .defaultIconSet('img/icons/sets/core-icons.svg', 24);
   });
;