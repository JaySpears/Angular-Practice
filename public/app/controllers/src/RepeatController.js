myApp.controller('repeatCtrl', ['$scope',
    function($scope){
        $scope.users = [
            { name: 'John Doe', email: 'johndoe@email.com' },
            { name: 'Jane Smith', email: 'janesmith@email.com' },
            { name: 'Mark Zuckerberg', email: 'DaMan@boss.com' }
        ]
    }
]);
