app.directive('audrate', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'directives/conversion_aud.html' 
  }; 
});
