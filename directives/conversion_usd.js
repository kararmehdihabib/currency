app.directive('usdrate', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'directives/conversion_usd.html' 
  }; 
});
