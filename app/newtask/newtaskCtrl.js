gardenApp.controller("newtaskCtrl", function ($scope, $log, $http, $location, activeUser) {
    $scope.user = activeUser.get();

   if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }


});