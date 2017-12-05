gardenApp.controller("newTaskCtrl", function($scope, $log, $http, $location, activeUser, tasks, $routeParams, $route, activeTask) {

    $scope.user = activeUser.get();

    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }


    $scope.kindOfTask = $route.current.$$route.kindOfTask;

    $scope.taskArr = tasks.getAll();
    $scope.task = {};
    $scope.activityArr=[];
    $scope.locationArr=[];
    $scope.plantsArr=[];
    $scope.employeeArr=[];

    $http.get("app/model/data/json/activity.json").then(function mySuccess(response) {
        for (var i=0;i<response.data.length;i++) {
            $scope.activityArr[i]=response.data[i].activity;
        }
         if ($scope.kindOfTask === "newtask") {
            $scope.task.activity = $scope.activityArr[0];
        }
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    $http.get("app/model/data/json/location.json").then(function mySuccess(response) {
        for (var i=0;i<response.data.length;i++) {
            $scope.locationArr[i]=response.data[i].name;
        }
        if ($scope.kindOfTask === "newtask") {
            $scope.task.location = $scope.locationArr[0];
        }
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    $http.get("app/model/data/json/plants.json").then(function mySuccess(response) {
        for (var i=0;i<response.data.length;i++) {
            $scope.plantsArr[i]=response.data[i].name;
        }
        if ($scope.kindOfTask === "newtask") {
            $scope.task.plant = $scope.plantsArr[0];
        }
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });
 
    $http.get("app/model/data/json/users.json").then(function mySuccess(response) {
        for (var i=0;i<response.data.length;i++) {
            $scope.employeeArr[i]=response.data[i].firstName;
        }
        if ($scope.kindOfTask === "newtask") {
            $scope.task.Employee = $scope.employeeArr[0];
        }
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });


    if ($routeParams.index) {
        $scope.task = tasks.getTaskById($routeParams.index);
    }

    $scope.cancel = function() {
        $location.path("/newTask");
    }

    $scope.Done = function(task) {
        var index = tasks.getIndexByTask(task);
        task.datedone = new Date();
        tasks.update(index, task);
        $location.path("/employeeMain");
    }

    $scope.create = function(task) {
        //$scope.task.Employee = $scope.task.Employee.firstName;
        tasks.add($scope.task);
        $scope.task = {};
        $location.path("/managerMain");
    }


});