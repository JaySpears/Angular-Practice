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

    $scope.$watch('currentIndex', function() {
        $scope.sliderImages.forEach(function(image) {
            // make every image invisible
            image.visible = false;
        });
        // make the current image visible
        $scope.sliderImages[$scope.currentIndex].visible = true;
    });
}]);
