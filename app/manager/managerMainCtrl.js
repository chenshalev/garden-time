
gardenApp.controller("managerMainCtrl", function($scope, $log, $http, $location,activeUser) {
    $scope.greetName=activeUser.get().firstName;
    


 });