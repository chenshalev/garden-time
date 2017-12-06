
gardenApp.controller("navCtrl", function($scope, activeUser) {
    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };
    $scope.user = activeUser.get();
    $scope.getUserfirstName = function() {
        return activeUser.get().firstName;
    };
    $scope.getUserlastName = function() {
        return activeUser.get().lastName;
    };
})
