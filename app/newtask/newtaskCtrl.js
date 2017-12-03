gardenApp.controller("newTaskCtrl", function ($scope, $log, $http, $location, activeUser, tasks, $routeParams) {
    $scope.user = activeUser.get();
    $scope.taskArr = [];
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.query = 0;

    $scope.task = {};
    if ($routeParams.index) {
        if ($routeParams.index.includes("E")) {
            var newindex=$routeParams.index.replace("E","");
            $scope.task = tasks.getTaskById(newindex);
            $scope.query = 2;
        } else {
            $scope.task = tasks.getTaskById($routeParams.index);
            $scope.query = 1;
        }
    }


    $http.get("app/model/data/json/activity.json").then(function mySuccess(response) {
        // Updating the service with the data
        $scope.activityArr = response.data;
        $scope.task.activity = $scope.activityArr[0];
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    $http.get("app/model/data/json/location.json").then(function mySuccess(response) {
        // Updating the service with the data
        $scope.locationArr = response.data;
        $scope.task.location = $scope.locationArr[0];
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    $http.get("app/model/data/json/plants.json").then(function mySuccess(response) {
        // Updating the service with the data
        $scope.plantsArr = response.data;
        $scope.task.plant = $scope.plantsArr[0];
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    $http.get("app/model/data/json/users.json").then(function mySuccess(response) {
        // Updating the service with the data
        $scope.employeeArr = response.data;
        $scope.task.employee = $scope.employeeArr[0];
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    $scope.fromdate = new Date();
    $scope.todate = new Date();

    $scope.cancel = function () {
        $location.path("/newTask");
    }

    $scope.create = function () {
        tasks.add($scope.task);
        $scope.task={};
        $location.path("/newTask");
    }


});