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
