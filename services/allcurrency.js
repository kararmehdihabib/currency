app.factory('currencies', ['$http', function($http) { 
  return $http.get('https://crossorigin.me/http://free.currencyconverterapi.com/api/v3/currencies') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);