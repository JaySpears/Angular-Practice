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
