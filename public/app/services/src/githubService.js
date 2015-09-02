myApp.factory('githubApi', ['$http', '$q',
    function($http, $q) {
        return {
            accountInformation: function() {
                var deferred = $q.defer();
                $http.get('https://api.github.com/users/joshspears3')
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
