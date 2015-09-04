myApp.controller('AboutCtrl', ['$scope', function($scope) {
  $scope.greeting = 'About Page!';
}]);

myApp.controller('ContactCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Contact Page!';
}]);

//Wrap controller in a IIFE closure to avoid global conflicts with variables
(function() {
    'use strict';
    myApp.controller('githubCtrl', [ 'githubApi', '$q', '$scope',
        function(githubApi, $q, $scope){
            $scope.getInfo = function(name){
                githubApi.accountInformation($scope.username)
                .then( function (result) {
                        // Wrap data returned in a object name data
                        $scope.data = result.data;
                    }, function (error) {
                        // Handle errors here
                        console.log(error.statusText);
                    }
                )
                .getInfo(name);
            }
            githubApi.accountInformation($scope.username)
            .then( function (result) {
                    // Wrap data returned in a object name data
                    $scope.data = result.data;
                }, function (error) {
                    // Handle errors here
                    console.log(error.statusText);
                }
            )
        }
    ]);
})();

myApp.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Home Page!';
}]);

myApp.controller('repeatCtrl', ['$scope',
    function($scope){
        $scope.users = [
            { name: 'John Doe', email: 'johndoe@email.com' },
            { name: 'Jane Smith', email: 'janesmith@email.com' },
            { name: 'Mark Zuckerberg', email: 'DaMan@boss.com' }
        ]
    }
]);

myApp.controller('sliderCtrl', ['$scope', function($scope){
    // Create an array of slide images
    $scope.sliderImages = [
        { image: '../../public/assets/img/joker2.jpg', description: 'Image 1' },
        { image: '../../public/assets/img/batman1.jpg', description: 'Image 2' },
        { image: '../../public/assets/img/joker1.jpg', description: 'Image 3' }
    ];

    // Initially the index is at the first image
    $scope.currentIndex = 0;

    //Display next image in array
    $scope.next = function(){
        if ($scope.currentIndex < $scope.sliderImages.length - 1) {
            $scope.currentIndex++
        } else {
            $scope.currentIndex = 0;
        }
    };

    //Display prev image in array
    $scope.prev = function() {
        if ($scope.currentIndex > 0) {
            $scope.currentIndex--
        } else {
            $scope.currentIndex = $scope.sliderImages.length - 1;
        }
    };
}]);

myApp.controller('WorkCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Work Page!';
}]);
