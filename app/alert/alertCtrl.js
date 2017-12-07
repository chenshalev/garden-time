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
    $http.get("app/model/data/json/materials.json").then(function mySuccess(response) {
        // Updating the service with the data
        $scope.materialsArr= response.data;
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });
    /*
    "FertilizationMaterial": "Compost",
    "name": "Composte",
    "Kind": "Fertilization material",
    "MaterialAmount": "60"
    
    for (var i=0;i<plantsArr.length;i++){
        var material=plantsArr[i].FertilizationMaterial;
        var amount=materials
    }

    */




    $scope.newTask = function () {

        $location.path("/newTask")
    }
    $scope.sortBy = function (prop) {
        $scope.orderProp = prop;
    }
    $scope.reports = function () {

        $location.path("/reports")
    }
    $scope.reverse = false;
    $scope.sortKey = 'name';

    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    }


});