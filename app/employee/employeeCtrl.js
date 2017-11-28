gardenApp.controller("employeeCtrl", function($scope, $log, $http, $location,activeUser) {
    $scope.test = "ewewew";           
    $scope.user=activeUser.get();
    


 });