/* jslint browser: true, esnext: true */

var angular = require('angular');
var angularRoute = require('angular-route');
require('./factory');
require('./controllers');

let mainApp = angular.module('AuctionApp', ['ngRoute', 'CarListService', 'Controllers']);

// $(window).scroll(function () {
//   var Bottom = $(window).height() + $(window).scrollTop() >= $(document).height();
//     if(Bottom ){
//       $('#header').hide();
//     }
//     });
//
//   $(window).scroll(function(){
//     var Top = $(window).height() + $(window).scrollTop() <= $(document).height();
//       if(Top){
//         $('#header').show();
//       }
//   });

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
    .when('/sold', {
      controller: 'SoldAuctionViewController',
      templateUrl: 'pageviews/sold.html',
    })
    .when('/tv', {
      controller: 'TvViewController',
      templateUrl: 'pageviews/tv.html',
    })
    .when('/contact', {
      controller: 'ContactViewController',
      templateUrl: 'pageviews/contact.html',
    })
    .when('./futureAuctions',{
      controller: 'FutureAuctionViewController',
      templateUrl: 'pageviews/futureAuctions.html',
    })
    .otherwise({
      redirectTo: '/main',
    });
}]);
