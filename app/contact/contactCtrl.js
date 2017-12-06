gardenApp.controller("contactCtrl", function ($scope, $log, $http, $location, activeUser) {
    
       /* if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }*/
        $scope.user = activeUser.get();
    });