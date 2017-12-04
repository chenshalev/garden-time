gardenApp.controller("employeeCtrl", function ($scope, $log, $http, $location, activeUser, tasks, $route, Task,activeTask) {




    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.user = activeUser.get();

    var wasEverLoadedEmp = tasks.getwasEverLoadedEmp();
    if (!wasEverLoadedEmp) {
        $http.get("app/model/data/json/tasks.json").then(function mySuccess(response) {
            tasks.loadEmp(response.data);
            var taskEmp = tasks.getAllEmp();
            var taskxx=[];
            for (var i=0;i<taskEmp.length;i++){
                if (taskEmp[i].Employee===$scope.user.firstName) {
                     taskxx.push(taskEmp[i]);
                }
            }
            $scope.taskEmp = taskxx;
            tasks.updateAllEmp($scope.taskEmp);
            
        }, function myError(response) {
            alert("error" + JSON.stringify(response.status));
        });
    } else {
        $scope.taskEmp = tasks.getAllEmp();
        alert(JSON.stringify($scope.taskEmp));
    }


    $scope.openTask = function (task) {
        var taskIndex = $scope.taskEmp.indexOf(task);

        activeTask.add(task);
        
        $location.path("/taskemployee/" + taskIndex)
    }


});