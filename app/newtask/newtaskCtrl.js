gardenApp.controller("newTaskCtrl", function ($scope, $log, $http, $location, activeUser) {
    $scope.user = activeUser.get();

   if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    
    $http.get("app/model/data/json/activity.json").then(function mySuccess(response) {
        // Updating the service with the data
        $scope.activityArr = response.data; 
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    $http.get("app/model/data/json/location.json").then(function mySuccess(response) {
        // Updating the service with the data
        $scope.locationArr = response.data; 
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    $http.get("app/model/data/json/plants.json").then(function mySuccess(response) {
        // Updating the service with the data
        $scope.plantsArr = response.data; 
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    $http.get("app/model/data/json/users.json").then(function mySuccess(response) {
        // Updating the service with the data
        $scope.employeeArr = response.data; 
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    $scope.fromdate = new Date();
    $scope.todate = new Date();

    $scope.cancel = function () {
        $location.path("/newtask");
    }
 
    $scope.create = function () {
        tasks.add($scope.task);
        $location.path("/newtask");
    }


});