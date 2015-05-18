angular.module('ngValidSubmit', [])
  .directive('ngValidSubmit', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        angular.element(element).bind('submit', function (e) {
          e.preventDefault();
          scope[attr.name].$feedback = true;
          if (scope[attr.name].$valid) {
            scope.$eval(attr.ngValidSubmit);
          }
          scope.$apply();
        });  
      }
    };
  })
  .directive('ngValidClick', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        angular.element(element).bind('click', function (e) {
          e.preventDefault();
          var formName = angular.element(element).closest('form').attr('name');
          scope[formName].$feedback = true;
          if (scope[formName].$valid) {
            scope.$eval(attr.ngValidClick);
          }
          scope.$apply();
        });  
      }
    };
  });
