/* jslint browser: true, esnext: true */

module.exports = (function(){

  let Firebase = require('firebase');
    let fireRequest = new Firebase('https://griswold-car-auction.firebaseio.com/');

  let service = angular.module('CarListService', []);

  function Car(id, image, miles, title, year){
        this.id = id;
        this.image = image;
        this.miles = miles;
        this.title = title;
        this.year = year;

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
            angular.copy(response.data, carNames);
            console.log(carNames);

        });
        return carNames;

      },

      previousSoldCars: function(){
        $http({
          method: 'GET',
          url: 'https://evening-depths-24907.herokuapp.com/cars',
        }).then(function(response2){
          console.log(response2);
            // angular.copy(response2.data, carCollection);
            console.log(carCollection);
            for(let i = 0; i < response.data.length; i++){
              let title = response.data[i].title;
              let miles = response.data[i].miles;
              let year = response.data[i].year;
              let image = response.data[i].image;
              let id = response.data[i].id;

              let savedCar = new Car(id, image, miles, title, year);
              console.log(savedCar);
              carNames.push(savedCar);
              let carToSave = new Firebase('https://griswold-car-auction.firebaseio.com/savedcars/'+ savedCar.id);
              carToSave.set(savedCar, function(){
                console.log('Cars saved');
              });

          }
        });
      },

    };

    });
    })();
