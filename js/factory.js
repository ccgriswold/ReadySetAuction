/* jslint browser: true, esnext: true */

module.exports = (function(){

  // let Firebase = require('firebase');
  //   let fireRequest = new Firebase('https://griswold-car-auction.firebase.io.com');

  let service = angular.module('CarListService', []);

  function Car(title, miles, price, year, image, id){
        this.title = title;
        this.id = id;
        this.miles = miles;
        this.price = price;
        this.year = year;
        this.image = image;

        return this;
    }

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
          for(let i = 0; i < response.data.length; i++){
            angular.copy(response.data, carCollection);
            // angular.copy(response.data, carNames);
            console.log(carCollection);

            // let savedCar = new Car(title, miles, price, year, image, id);
            // let carToSave = new Firebase('https://griswold-car-auction.firebaseio.com/savedcars/'+ savedCar.id);
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
