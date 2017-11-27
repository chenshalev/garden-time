
gardenApp.controller("navCtrl", function($scope, activeUser) {
    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };
})
