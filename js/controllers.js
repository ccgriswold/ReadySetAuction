/* jslint browser: true, esnext: true */

module.exports = (function(){

let controllers = angular.module('Controllers', []);

controllers.controller('MainViewController', ['$scope', function ($scope){
  // console.log('Main View');
}]);

controllers.controller('CarsViewController', ['$scope', 'CarListService', function ($scope, CarListService){
  $scope.carLot = CarListService.fetchCar();
}]);

controllers.controller('CollectorCarsViewController', ['$scope', 'CarListService', function ($scope, CarListService){
  // console.log('Collection Viewed');
  CarListService.previousSoldCars();
  $scope.saveCars = CarListService.getPrevious();
}]);

controllers.controller('PreviousAuctionViewController', ['$scope', function ($scope){
  // console.log('Previous Auction Viewed');
}]);

controllers.controller('TvViewController', ['$scope', function ($scope){
  console.log('Televised Auctions');
  $scope.alert = function(){
    alert('Sorry Streaming Not Available Currently');
  };
}]);

controllers.controller('ContactViewController', ['$scope', function ($scope){
  console.log('Contact Us');
}]);

controllers.controller('StreamingSiteController', ['$scope', function ($scope){
  console.log('Streaming');
}]);

})();
