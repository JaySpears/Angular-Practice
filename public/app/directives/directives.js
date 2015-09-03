myApp.directive('githubRequest', [
    function() {
        return {
            scope: {},
            restrict: 'E',
            controller: 'githubCtrl',
            templateUrl: 'public/views/partials/github-request.html'
        }
    }
]);

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

myApp.directive('hideShow', [function(){
    return {
        scope: {},
        restrict: 'E',
        templateUrl: 'public/views/partials/hide-show.html',
    }    
}]);

myApp.directive('repeatDirective', [
    function() {
        return {
            scope: {},
            restrict: 'E',
            controller: 'repeatCtrl',
            templateUrl: 'public/views/partials/repeat-example.html'
        }
    }
]);
