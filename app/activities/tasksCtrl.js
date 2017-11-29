gardenApp.controller("tasksCtrl", function ($scope, $log, $http, $location, activeUser) {
    $scope.user = activeUser.get();
    alert("gfgfg");
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.gotonewtask = function () {
        $location.path("/newtask");
    }
    $scope.gotoreports = function () {
        $location.path("/reports");
    }

});