app.factory('currencies', ['$http', function($http) { 
  return $http.get('http://cors-anywhere.herokuapp.com/http://free.currencyconverterapi.com/api/v3/currencies') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);