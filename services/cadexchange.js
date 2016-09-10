app.factory('cadexchange', ['$http', function($http) { 
  return $http.get("https://crossorigin.me/http://free.currencyconverterapi.com/api/v3/convert?q=CAD_BDT,CAD_USD,CAD_GBP,CAD_INR,CAD_AUD,CAD_EUR,CAD_NZD&compact=y") 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);