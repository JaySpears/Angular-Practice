myApp.directive('slider', [ '$timeout',
    function($timeout) {
        return {
            scope: {},
            restrict: 'E',
            controller: 'sliderCtrl',
            templateUrl: 'public/views/partials/slider.html'
        }
    }
]);
