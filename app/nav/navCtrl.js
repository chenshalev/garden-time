
gardenApp.controller("navCtrl", function($scope, activeUser) {
    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };
    $scope.user = activeUser.get();
    $scope.getUserfirstName = function() {
        if (activeUser.get()){
            return activeUser.get().firstName;           
        }else return "";

     };
    $scope.getUserlastName = function() {
        if (activeUser.get()) {
            return activeUser.get().lastName;
        }
        else return "";
    };
    $scope.logout= function () {
        activeUser.logout();
    }
})
