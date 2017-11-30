
gardenApp.controller("managerMainCtrl", function ($scope, $log, $http, $location, activeUser) {
    $scope.user = activeUser.get();

    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.user = activeUser.get();

    $http.get("app/model/data/json/activity.json").then(function mySuccess(response) {
        // Updating the service with the data
        $scope.activityArr = response.data;
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    $scope.openActivity = function (activity) {
        $location.path("/" + activity.window);
    }

});