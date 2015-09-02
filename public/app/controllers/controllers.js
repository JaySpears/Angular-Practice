myApp.controller('AboutCtrl', ['$scope', function($scope) {
  $scope.greeting = 'About Page!';
}]);

myApp.controller('ContactCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Contact Page!';
}]);

myApp.controller('githubCtrl', [ 'githubApi', '$q', '$scope',
    function(githubApi, $q, $scope){
        // Call the promise from github service
        githubApi.accountInformation()
        .then( function (result) {
                // Wrap data returned in a object name data
                $scope.data = result.data;
            }, function (error) {
                // Handle errors here
                console.log(error.statusText);
            }
        );
    }
]);

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

myApp.controller('WorkCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Work Page!';
}]);
