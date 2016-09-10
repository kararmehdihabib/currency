app.directive('cadrate', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'directives/conversion_cad.html' 
  }; 
});
