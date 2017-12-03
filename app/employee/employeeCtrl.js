gardenApp.controller("employeeCtrl", function ($scope, $log, $http, $location, activeUser, tasks) {

    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.user = activeUser.get();

    $http.get("app/model/data/json/tasks.json").then(function mySuccess(response) {
        // Updating the service with the data
        tasks.load(response.data);
        // Getting the data from the service
        taskArr=tasks.getAll();
        tasktemp=[];
        for (var index = 0; index < taskArr.length; index++) {
            if (taskArr[index].Employee === $scope.user.firstName) {
                tasktemp.push(taskArr[index]);
            }
        }
        $scope.taskArr=tasktemp;
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    $scope.openTask= function (task) {
        var taskIndex = $scope.taskArr.indexOf(task);

        // Updating the URL
        $location.path("/taskdetails/" + taskIndex+"E")
      }          


});