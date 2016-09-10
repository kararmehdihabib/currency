app.directive('eurorate', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'directives/conversion_euro.html' 
  }; 
});
