/* jslint browser: true, esnext: true */

module.exports = (function(){

var controllers = angular.module('Controllers', []);

controllers.controller('MainViewController', ['$scope', function ($scope){
  // console.log('Main View');
}]);

controllers.controller('CarsViewController', ['$scope', 'CarListService', function ($scope, CarListService){
  $scope.carLot = CarListService.fetchCar();
  $scope.theyreSold = function(title){
    for (var car in CarListService.soldCars()){
      if(title.indexOf(CarListService.soldCars()[car]) === title.indexOf(CarListService.fetchCar()[car])){
        console.log(title, CarListService.soldCars()[i], true);
        return true;
      }else{
        console.log('false');
        return false;
      }
    }
  };
}]);

controllers.controller('CollectorCarsViewController', ['$scope', 'CarListService', function ($scope, CarListService){

}]);

controllers.controller('SoldAuctionViewController', ['$scope', 'CarListService', function ($scope, CarListService){
  // $scope.saveCars = CarListService.soldCars();
  CarListService.soldCars().then(function (cars) {
    $scope.saveCars = cars;
    $scope.$apply();
  });
}]);

controllers.controller('TvViewController', ['$scope', function ($scope){
  // console.log('Televised Auctions');
  $scope.alert = function(){
    alert('Sorry Streaming Not Available Currently');
  };
}]);

controllers.controller('ContactViewController', ['$scope', function ($scope){
  $scope.alert = function(){
    alert('Thanks For The Interest');
  };
}]);

controllers.controller('StreamingSiteController', ['$scope', function ($scope){
  // console.log('Streaming');
}]);

controllers.controller('FutureAuctionViewController', ['$scope', function ($scope){
  // console.log('Future Auction View');
}]);

})();
