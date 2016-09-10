app.factory('audexchange', ['$http', function($http) { 
  return $http.get("https://crossorigin.me/http://free.currencyconverterapi.com/api/v3/convert?q=AUD_BDT,AUD_USD,AUD_GBP,AUD_INR,AUD_EUR,AUD_CAD,AUD_NZD&compact=y") 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);