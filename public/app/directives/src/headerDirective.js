myApp.directive('globalHeader',['$location', function($location){
    return {
        scope: {},
        restrict: 'E',
        templateUrl: 'public/views/partials/header.html',
        controller: '',
        link: function(scope, element, attrs, controllers){
            scope.active = function (viewLocation) {
                return viewLocation === $location.path();
            };
        }
    }
}]);
