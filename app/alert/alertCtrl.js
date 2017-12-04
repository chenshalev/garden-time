gardenApp.controller("alertCtrl", function ($scope, $log, $http, $location, activeUser) {

    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.user = activeUser.get();
    $http.get("app/model/data/json/plants.json").then(function mySuccess(response) {
        // Updating the service with the data
        $scope.plantsArr = response.data;
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    $scope.openTask = function (task) {
        var taskIndex = $scope.taskArr.indexOf(task);

        // Updating the URL
        $location.path("/alert/" + taskIndex)
    }
    $scope.sortBy = function (prop) {
        $scope.orderProp = prop;
    }


});