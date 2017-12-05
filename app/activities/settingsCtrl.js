gardenApp.controller("settingsCtrl", function($scope, $log, $http, $location, activeUser, tasks, $routeParams, $route, activeTask) {

    $scope.user = activeUser.get();
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }



    $scope.taskArr = tasks.getAll();
    $scope.task = {};

    $http.get("app/model/data/json/activity.json").then(function mySuccess(response) {
        $scope.activityArr = response.data;
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    $http.get("app/model/data/json/location.json").then(function mySuccess(response) {
        $scope.locationArr = response.data;
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    $http.get("app/model/data/json/plants.json").then(function mySuccess(response) {
        $scope.plantsArr = response.data;
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    $http.get("app/model/data/json/materials.json").then(function mySuccess(response) {
        $scope.materialsArr = response.data;
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });
    $http.get("app/model/data/json/users.json").then(function mySuccess(response) {
        $scope.employeeArr = response.data;
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });
})