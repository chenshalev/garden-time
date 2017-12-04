gardenApp.controller("newTaskCtrl", function ($scope, $log, $http, $location, activeUser, tasks, $routeParams, $route, activeTask) {

    $scope.user = activeUser.get();
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }


    $scope.kindOfTask = $route.current.$$route.kindOfTask;

    $scope.taskArr = tasks.getAll();
    //$scope.taskEmp=tasks.getAllEmp();
    $scope.task = {};

    if ($scope.kindOfTask === "reports") {
        $scope.task = tasks.getTaskById($routeParams.index);
    }
    if ($scope.kindOfTask === "employee") {
        $scope.task = activeTask.get();
    }


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

    $http.get("app/model/data/json/users.json").then(function mySuccess(response) {
        $scope.employeeArr = response.data;
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    //Default for new task 



    $scope.cancel = function () {
        $location.path("/newTask");
    }

    $scope.Done = function (task) {

  
        var indexEmp=tasks.getIndexByTaskEmp(task);
        tasks.updateEmp(indexEmp,task);


        var taskArr = tasks.getAll();
        //alert(JSON.stringify(taskArr));
        var index=tasks.getIndexByTask($scope.task);
        alert("index"+index);
        $scope.task.datedone = "2019-01-01";        
        tasks.update(index,$scope.task);
        
        $location.path("/employeeMain");
    }

    $scope.create = function (task) {
        $scope.task.Employee = $scope.task.Employee.firstName;
        tasks.add($scope.task);
        tasks.addEmp($scope.task);
        $scope.task = {};
        $location.path("/managerMain");
    }


});