gardenApp.controller("reportsCtrl", function ($scope, $log, $http, $location, activeUser, tasks) {
    
        if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }
        $scope.user = activeUser.get();
    
     
    });