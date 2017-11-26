var gardenApp = angular.module("gardenApp", ["ngRoute"]);

gardenApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home.html"
    })
    .when("/managerMain", {
        templateUrl: "app/manager/managerMain.html",
        controller: "managerMainCtrl"
    })
  })


