gardenApp.controller("homeCtrl", function ($scope) {
    //$scope.login = function() {
    //    $uibModal.open({
    //        templateUrl: "app/login/login.html",
    //        controller: "loginCtrl"
    //    })
    //}

    $scope.login = function () {
        var user = getLoggedInUser();
        if (user != null) {
            activeUser.login(user);
            //$uibModalInstance.close("Logged-in");
            $location.path("/managerMain")
        } else {
            $scope.failedAttempt = true;
        }
    }

});



