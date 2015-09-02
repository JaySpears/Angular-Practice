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
