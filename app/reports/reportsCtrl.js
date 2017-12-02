gardenApp.controller("reportsCtrl", function ($scope, $log, $http, $location, activeUser, tasks) {
    
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
            $scope.taskArr=taskArr;
        }, function myError(response) {
            alert("error" + JSON.stringify(response.status));
        });

        $scope.openTask= function (task) {
                var taskIndex = $scope.taskArr.indexOf(task);
        
                // Updating the URL
                $location.path("/taskdetails/" + taskIndex)
              }          


    });