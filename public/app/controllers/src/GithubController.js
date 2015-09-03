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
