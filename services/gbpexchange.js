app.factory('gbpexchange', ['$http', function($http) { 
  return $http.get("http://cors-anywhere.herokuapp.com/http://free.currencyconverterapi.com/api/v3/convert?q=GBP_BDT,GBP_EUR,GBP_USD,GBP_INR,GBP_AUD,GBP_CAD,GBP_NZD&compact=y") 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);