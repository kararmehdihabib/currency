app.factory('usdexchange', ['$http', function($http) { 
  return $http.get("https://crossorigin.me/http://free.currencyconverterapi.com/api/v3/convert?q=USD_BDT,USD_EUR,USD_GBP,USD_INR,USD_AUD,USD_CAD,USD_NZD&compact=y") 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);