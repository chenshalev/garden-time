
gardenApp.controller("managerMainCtrl", function($scope, $log, $http, $location,activeUser) {
    $scope.test = "ewewew";           
    $scope.greetName=activeUser.get().firstName;
    


 });