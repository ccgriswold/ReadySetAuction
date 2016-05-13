/* jslint browser: true, esnext: true */

module.exports = (function(){
  let service = angular.module('CarListService', []);

  let Firebase = require('firebase');
  let fireRequest = new Firebase('https://griswold-car-auction.firebase.io.com/');

  service.factory('CarListService', function($http){
    let carCollection = [];
    let carNames = [];

    return{
      fetchCar: function(){
        $http({
          method: 'GET',
          url: 'https://evening-depths-24907.herokuapp.com/cars',
        }).then(function(response){
          console.log(response);
          // for(let i = 0; i < response.data.length; i++){
            // carNames.push(response.data);
            angular.copy(response.data, carNames);
            console.log(carNames);
          // }
        });
      },

      previousSoldCars: function(){
        $http({
          method: 'GET',
          url: 'https://evening-depths-24907.herokuapp.com/cars',
        }).then(function(response){
          console.log(response);
          for(let i = 0; i < response.data.length < 4; i++){
            carCollection.push(response.data);
            // angular.copy(response.data, carNames);
            console.log(carCollection);
          }
        });
      },

      getCars: function(){
        return carNames;
      },

      getPrevious: function(){
        return carCollection;
      },

    };

    });
    })();
