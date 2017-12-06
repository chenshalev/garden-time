gardenApp.controller("employeeCtrl", function ($scope, $log, $http, $location, activeUser, tasks, $route, Task, activeTask) {


    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.user = activeUser.get();

    var wasEverLoaded = tasks.getwasEverLoaded();
    if (!wasEverLoaded) {
        $http.get("app/model/data/json/tasks.json").then(function mySuccess(response) {
            // Updating the service with the data
            tasks.load(response.data);
            // Getting the data from the service
            taskArr = tasks.getAll();
            $scope.taskArr = taskArr;
            tasks.updateAll($scope.taskArr);

        }, function myError(response) {
            alert("error" + JSON.stringify(response.status));
        });
    } else {
        $scope.taskArr = tasks.getAll();
        //alert(JSON.stringify($scope.taskArr));

    }
    // Custom filter function
    $scope.filterbyEmployee = function (task) {
        //alert(task.Employee);
        //alert($scope.user.firstName);
        if (task.Employee === $scope.user.firstName) {
            return true;
        } else {
            return false;
        }
    }
    $scope.reverse = false;
    $scope.sortKey = 'name';

    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    }



    $scope.openTask = function (task) {
        var taskIndex = $scope.taskArr.indexOf(task);

        // Updating the URL
        $location.path("/taskemployee/" + taskIndex)
    }



});