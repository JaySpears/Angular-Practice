myApp.factory('githubApi', ['$http', '$q',
    function($http, $q) {
        return {
            accountInformation: function(username) {
                var deferred = $q.defer();
                $http.get('https://api.github.com/users/' + username)
                .then(function(response){
                    deferred.resolve(response);
                }, function(response){
                    deferred.reject(response);
                })
                return deferred.promise;
            }
        }
    }
]);
