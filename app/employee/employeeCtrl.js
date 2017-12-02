gardenApp.controller("employeeCtrl", function ($scope, $log, $http, $location, activeUser, tasks) {

    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.user = activeUser.get();

    // http call to get data from json

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
        $scope.taskArr=taskArr;
       ///just for now!!!-to take it off!!! $scope.taskArr=tasktemp;
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

});