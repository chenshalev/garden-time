var gardenApp = angular.module("gardenApp", ["ngRoute"]);

gardenApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "homeCtrl"
        })
        .when("/managerMain", {
            templateUrl: "app/manager/managerMain.html",
            controller: "managerMainCtrl"
        })
        .when("/employeeMain", {
            templateUrl: "app/employee/employeeMain.html",
            controller: "employeeCtrl"
        })
        .when("/Watering", {
            templateUrl: "app/activities/Watering.html",
        })
        .when("/Fertilization", {
            templateUrl: "app/activities/Fertilization.html",
        })
        .when("/Trimming", {
            templateUrl: "app/activities/Trimming.html",
        })
        .when("/Fruit", {
            templateUrl: "app/activities/Fruit.html",
        })
        .when("/Planting", {
            templateUrl: "app/activities/Planting.html",
        })
        .when("/Settings", {
            templateUrl: "app/activities/Settings.html",
        })
        .when("/tasks", {
            templateUrl: "app/activities/tasks.html",
            controller: "tasksCtrl"
        })
        .when("/newTask", {
            templateUrl: "app/newTask/newTask.html",
            controller: "newTaskCtrl"
        })
        .when("/about", {
            templateUrl: "app/about/about.html",
        })
        .when("/reports", {
            templateUrl: "app/reports/reports.html",
        })


})