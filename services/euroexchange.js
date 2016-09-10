app.factory('euroexchange', ['$http', function($http) { 
  return $http.get("https://crossorigin.me/http://free.currencyconverterapi.com/api/v3/convert?q=EUR_BDT,EUR_USD,EUR_GBP,EUR_INR,EUR_AUD,EUR_CAD,EUR_NZD&compact=y") 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);