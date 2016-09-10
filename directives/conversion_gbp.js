app.directive('gbprate', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'directives/conversion_gbp.html' 
  }; 
});
