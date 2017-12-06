
gardenApp.controller("navCtrl", function($scope, activeUser) {
    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };
    $scope.user = activeUser.get();
    $scope.getUserName = function() {
        return activeUser.get().firstName;
    };
})
