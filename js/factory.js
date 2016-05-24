/* jslint browser: true, esnext: true */

module.exports = (function(){

  var Firebase = require('firebase');
    var fireRequest = new Firebase('https://griswold-car-auction.firebaseio.com/');

  var service = angular.module('CarListService', []);

  function Car(id, image, miles, title, year){
        this.id = id;
        this.image = image;
        this.miles = miles;
        this.title = title;
        this.year = year;

        return this;
    }

  service.factory('CarListService', function($http){
    var carNames = [];
    var soldCars = [];

    return{
      fetchCar: function(){
        $http({
          method: 'GET',
          url: 'https://evening-depths-24907.herokuapp.com/cars',
        }).then(function(response){

          for(var i = 0; i < response.data.length; i++){
            var title = response.data[i].title;
            var miles = response.data[i].miles;
            var year = response.data[i].year;
            var image = response.data[i].image;
            var id = response.data[i].id;

            var savedCar = new Car(id, image, miles, title, year);
            // console.log(savedCar);
            carNames.push(savedCar);
            var carToSave = new Firebase('https://griswold-car-auction.firebaseio.com/carlist/'+ savedCar.id);
            carToSave.set(savedCar, function(){
              console.log('Cars saved');
            });
          }
        });
        return carNames;
      },

      soldCars: function(){
        var firePull = new Firebase('https://griswold-car-auction.firebaseio.com/savedcars/');

        return firePull.once('value').then(function(cars){
          var carCollection = [];
          var data = cars.val();

          for (var carId in data) {
            carCollection.push(data[carId]);
          }

          return carCollection;
        });

        // return carCollection;
      },

    };

    });
    })();
