var myApp = angular.module('myApp',['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/public/views/pages/home.html',
                controller: 'HomeCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/public/views/pages/about.html',
                controller: 'AboutCtrl'
            })
            .state('work', {
                url: '/work',
                templateUrl: '/public/views/pages/work.html',
                controller: 'WorkCtrl'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/public/views/pages/contact.html',
                controller: 'ContactCtrl'
            });

        $urlRouterProvider.otherwise("/");
    }
]);
