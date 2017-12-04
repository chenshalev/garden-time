gardenApp.controller("settingsCtrl", function ($scope, $log, $http, $location, activeUser, tasks, $routeParams, $route, activeTask) {
    
        $scope.user = activeUser.get();
        if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }
    
    
    
        $scope.taskArr = tasks.getAll();
        //$scope.taskEmp=tasks.getAllEmp();
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
    
        $http.get("app/model/data/json/users.json").then(function mySuccess(response) {
            $scope.employeeArr = response.data;
        }, function myError(response) {
            alert("error" + JSON.stringify(response.status));
        });
    
        //Default for new task 
    
    
    
       /* $scope.cancel = function () {
            $location.path("/newTask");
        }
    
        $scope.Done = function (task) {
    
            var indexEmp=tasks.getIndexByTaskEmp(task);
    
            //var index=tasks.getIndexByTask(task);
    
            //tasks.addDateDone($scope.task);
            
            $scope.task.datedone = new Date();
    
            tasks.updateEmp(indexEmp,task);
    
            $location.path("/employeeMain");
        }
    
        $scope.create = function (task) {
            tasks.add($scope.task);
            tasks.addEmp($scope.task);
            $scope.task = {};
            $location.path("/newTask");
        }
    */
    
    });