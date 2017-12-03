gardenApp.controller("newTaskCtrl", function ($scope, $log, $http, $location, activeUser, tasks, $routeParams,$route) {

    $scope.user = activeUser.get();
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
 
 
    $scope.kindOfTask = $route.current.$$route.kindOfTask;
 
    $scope.taskArr=tasks.getAll();
    $scope.taskEmp=tasks.getAllEmp();
    
    $scope.task = {};

    if ($scope.kindOfTask==="reports") {    
        $scope.task = tasks.getTaskById($routeParams.index);
    }
    if ($scope.kindOfTask==="employee") {    
        $scope.task =tasks.getTaskEmpById($routeParams.index);
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
        //var taskIndex = $scope.taskEmp.indexOf(task);
        //var task=taskEmp[taskIndex];
        //alert( "thank you!!");
        //task.datedone=new Date("2017-12-15");
        //alert(JSON.stringify(task));
        //tasks.updateEmp(taskIndex,task);
        $location.path("/employeeMain");
    }


    $scope.create = function () {
        tasks.add($scope.task);
        $scope.task={};
        $location.path("/newTask");
    }


});