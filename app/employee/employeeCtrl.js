gardenApp.controller("employeeCtrl", function ($scope, $log, $http, $location, activeUser, tasks, $route, Task) {




    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.user = activeUser.get();

    var wasEverLoadedEmp = tasks.getwasEverLoadedEmp();
    if (!wasEverLoadedEmp) {
        $http.get("app/model/data/json/tasks.json").then(function mySuccess(response) {
            // Updating the service with the data
            tasks.loadEmp(response.data);
            // Getting the data from the service

            taskEmp = tasks.getAllEmp();
            var taskxx=taskEmp;
            for (var i=0;i<taskxx.length;i++){
                if (taskxx[i].Employee!=$scope.user.firstName) {
                    index=taskEmp.indexOf(taskxx[i]);
                     tasks.removeEmp(index);
                }
            }
            $scope.taskEmp = taskEmp;
            
        }, function myError(response) {
            alert("error" + JSON.stringify(response.status));
        });
    } else {
        $scope.taskEmp = tasks.getAllEmp();
    }


    $scope.openTask = function (task) {
        var taskIndex = $scope.taskEmp.indexOf(task);
        // Updating the URL
        $location.path("/taskemployee/" + taskIndex)
    }


});