app.controller('MainCtrl', ['$scope','$http','currencies','euroexchange','usdexchange','gbpexchange','cadexchange','audexchange', function($scope,$http,currencies,euroexchange,usdexchange,gbpexchange,cadexchange,audexchange) {
      currencies.success(function(data) {
    var allCurrencies =[];
    $scope.from = "USD, United States dollar";
    $scope.to = "EUR, European Euro";
    $scope.usd = "USD, United States dollar";
    $scope.euro = "EUR, European Euro";
    //refresh page every 8 minutes
    $scope.TimedRefresh = function(t) {
            console.log(t);
            setTimeout("location.reload(true);", t);
    }

    $scope.TimedRefresh(80000);
//gathering the currenciy names
        angular.forEach(data.results, function(value,key){
      allCurrencies.push(data.results[key].id + ", "+data.results[key].currencyName);
      allCurrencies.sort();
      console.log(data.results);
      $scope.allCurrencies= allCurrencies;
     

    });
      });
//different currency exchange rates
        euroexchange.success(function(data) {
       $scope.euroex = {
        takaVal: (data.EUR_BDT.val).toFixed(2),
        invtakaVal: (1/data.EUR_BDT.val).toFixed(5),
        usdVal: (data.EUR_USD.val).toFixed(2),
        invusdVal: (1/data.EUR_USD.val).toFixed(5),
        gbpVal: (data.EUR_GBP.val).toFixed(2),
        invgbpVal: (1/data.EUR_GBP.val).toFixed(5),
        inrVal: (data.EUR_INR.val).toFixed(2),
        invinrVal: (1/data.EUR_INR.val).toFixed(5),
        audVal: (data.EUR_AUD.val).toFixed(2),
        invaudVal: (1/data.EUR_AUD.val).toFixed(5),
        cadVal:  (data.EUR_CAD.val).toFixed(2),
        invcadVal: (1/data.EUR_CAD.val).toFixed(5), 
        nzdVal:  (data.EUR_NZD.val).toFixed(2),
        invnzdVal: (1/data.EUR_NZD.val).toFixed(5)  };
      });

        //usd to different currencies
        usdexchange.success(function(data) {
       $scope.usdex = {
        takaVal: (data.USD_BDT.val).toFixed(2),
        invtakaVal: (1/data.USD_BDT.val).toFixed(5),
        euroVal: (data.USD_EUR.val).toFixed(2),
        inveuroVal: (1/data.USD_EUR.val).toFixed(5),
        gbpVal: (data.USD_GBP.val).toFixed(2),
        invgbpVal: (1/data.USD_GBP.val).toFixed(5),
        inrVal: (data.USD_INR.val).toFixed(2),
        invinrVal: (1/data.USD_INR.val).toFixed(5),
        audVal: (data.USD_AUD.val).toFixed(2),
        invaudVal: (1/data.USD_AUD.val).toFixed(5),
        cadVal:  (data.USD_CAD.val).toFixed(2),
        invcadVal: (1/data.USD_CAD.val).toFixed(5), 
        nzdVal:  (data.USD_NZD.val).toFixed(2),
        invnzdVal: (1/data.USD_NZD.val).toFixed(5)  };
    
      });
        //gbp to different currencies
           gbpexchange.success(function(data) {
       $scope.gbpex = {
        takaVal: (data.GBP_BDT.val).toFixed(2),
        invtakaVal: (1/data.GBP_BDT.val).toFixed(5),
        euroVal: (data.GBP_EUR.val).toFixed(2),
        inveuroVal: (1/data.GBP_EUR.val).toFixed(5),
        usdVal: (data.GBP_USD.val).toFixed(2),
        invusdVal: (1/data.GBP_USD.val).toFixed(5),
        inrVal: (data.GBP_INR.val).toFixed(2),
        invinrVal: (1/data.GBP_INR.val).toFixed(5),
        audVal: (data.GBP_AUD.val).toFixed(2),
        invaudVal: (1/data.GBP_AUD.val).toFixed(5),
        cadVal:  (data.GBP_CAD.val).toFixed(2),
        invcadVal: (1/data.GBP_CAD.val).toFixed(5), 
        nzdVal:  (data.GBP_NZD.val).toFixed(2),
        invnzdVal: (1/data.GBP_NZD.val).toFixed(5)  };
    
      });

        //canadian dollar to different currencies
        cadexchange.success(function(data) {
       $scope.cadex = {
        takaVal: (data.CAD_BDT.val).toFixed(2),
        invtakaVal: (1/data.CAD_BDT.val).toFixed(5),
        euroVal: (data.CAD_EUR.val).toFixed(2),
        inveuroVal: (1/data.CAD_EUR.val).toFixed(5),
        usdVal: (data.CAD_USD.val).toFixed(2),
        invusdVal: (1/data.CAD_USD.val).toFixed(5),
        inrVal: (data.CAD_INR.val).toFixed(2),
        invinrVal: (1/data.CAD_INR.val).toFixed(5),
        audVal: (data.CAD_AUD.val).toFixed(2),
        invaudVal: (1/data.CAD_AUD.val).toFixed(5),
        gbpVal:  (data.CAD_GBP.val).toFixed(2),
        invgbpVal: (1/data.CAD_GBP.val).toFixed(5), 
        nzdVal:  (data.CAD_NZD.val).toFixed(2),
        invnzdVal: (1/data.CAD_NZD.val).toFixed(5)  };
    
      });
        //aud to different currencies
        audexchange.success(function(data) {
       $scope.audex = {
        takaVal: (data.AUD_BDT.val).toFixed(2),
        invtakaVal: (1/data.AUD_BDT.val).toFixed(5),
        euroVal: (data.AUD_EUR.val).toFixed(2),
        inveuroVal: (1/data.AUD_EUR.val).toFixed(5),
        usdVal: (data.AUD_USD.val).toFixed(2),
        invusdVal: (1/data.AUD_USD.val).toFixed(5),
        inrVal: (data.AUD_INR.val).toFixed(2),
        invinrVal: (1/data.AUD_INR.val).toFixed(5),
        cadVal: (data.AUD_CAD.val).toFixed(2),
        invcadVal: (1/data.AUD_CAD.val).toFixed(5),
        gbpVal:  (data.AUD_GBP.val).toFixed(2),
        invgbpVal: (1/data.AUD_GBP.val).toFixed(5), 
        nzdVal:  (data.AUD_NZD.val).toFixed(2),
        invnzdVal: (1/data.AUD_NZD.val).toFixed(5)  };
    
      });

//updating the currency value with each user input
          $scope.update = function() {
    $scope.from;
    $scope.to;
    $scope.amount;
    
   $scope.convert=$scope.from.slice(0,3) +"_"+$scope.to.slice(0,3);
   $http.get("http://cors-anywhere.herokuapp.com/http://free.currencyconverterapi.com/api/v3/convert?q="+$scope.convert+"&compact=y")
                                  .then(function(response) {
                                    $scope.numeric_value = ($scope.amount*eval("response.data."+$scope.convert+".val")).toFixed(5);
                                    if($scope.numeric_value !== "NaN"){
                                    $scope.value = $scope.numeric_value + " "+ $scope.to.slice(0,3);
                                     console.log($scope.numeric_value);
                                   }
                                   else{
                                    $scope.value  = "Please type a valid amount!";
                                   }
                                  }, function(response) {
                                      $scope.content = "OOPS Something went wrong";
                                  });
    
}
//enabling the function of interchange button in the converter
$scope.change = function() {
  $scope.amount;
  $scope.curr = $scope.from;
    $scope.curr2=$scope.to;
   $scope.from = $scope.curr2;
   $scope.to = $scope.curr;
   $scope.convert = $scope.curr2.slice(0,3)+"_"+$scope.curr.slice(0,3);
      $http.get("http://cors-anywhere.herokuapp.com/http://free.currencyconverterapi.com/api/v3/convert?q="+$scope.convert+"&compact=y")
                                  .then(function(response) {
                                    $scope.numeric_value = ($scope.amount*eval("response.data."+$scope.convert+".val")).toFixed(5);
                                     if($scope.numeric_value !== "NaN"){
                                    $scope.value = $scope.numeric_value +" "+ $scope.curr.slice(0,3);
                                     console.log($scope.value);
                                   }
                                    else{
                                    $scope.value  = "Please type a valid amount!";
                                   }
                                  }, function(response) {
                                      $scope.content = "OOPS Something went wrong";
                                  });
}

}]);
