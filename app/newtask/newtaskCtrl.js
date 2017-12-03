gardenApp.controller("newTaskCtrl", function($scope, $log, $http, $location, activeUser, tasks,$routeParams) {
    $scope.user = activeUser.get();
    $scope.taskArr = [];
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.taskreport=false;
    $scope.tasknew=false;
    $scope.taskquery=false;
    

    if ($routeParams.index) {
        $scope.task = tasks.getTaskById($routeParams.index);
        $scope.query=true;
    }
    else {
    $http.get("app/model/data/json/activity.json").then(function mySuccess(response) {
        // Updating the service with the data
        $scope.activityArr = response.data;
        $scope.task.activity=$scope.activityArr[0];
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
}
    $scope.fromdate = new Date();
    $scope.todate = new Date();

    $scope.cancel = function() {
        $location.path("/newTask");
    }

    $scope.create = function() {
        tasks.add($scope.task);
        alert("Saved!" + JSON.stringify($scope.taskArr));
        $location.path("/newTask");
    }


});