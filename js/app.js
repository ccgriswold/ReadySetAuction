/* jslint browser: true, esnext: true */

require('./factory');
require('./controllers');

let mainApp = angular.module('AuctionApp', ['ngRoute', 'CarListService', 'Controllers']);

mainApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/main', {
      controller: 'MainViewController',
      templateUrl: 'pageviews/main.html',
    })
    .when('/auctions', {
      controller: 'CarsViewController',
      templateUrl: 'pageviews/auctions.html',
    })
    .when('/collectors', {
      controller: 'CollectorCarsViewController',
      templateUrl: 'pageviews/collectors.html',
    })
    .when('/previous', {
      controller: 'PreviousAuctionViewController',
      templateUrl: 'pageviews/previous.html',
    })
    .when('/tv', {
      controller: 'TvViewController',
      templateUrl: 'pageviews/tv.html',
    })
    .when('/contact', {
      controller: 'ContactViewController',
      templateUrl: 'pageviews/contact.html',
    })
    .otherwise({
      redirectTo: '/main',
    });
}]);
