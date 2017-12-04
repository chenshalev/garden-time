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
            controller: "alertCtrl"

        })
        .when("/Fertilization", {
            templateUrl: "app/activities/Fertilization.html",
            controller: "alertCtrl"

        })
        .when("/Trimming", {
            templateUrl: "app/activities/Trimming.html",
            controller: "alertCtrl"

        })
        .when("/Fruit", {
            templateUrl: "app/activities/Fruit.html",
            controller: "alertCtrl"

        })
        .when("/Planting", {
            templateUrl: "app/activities/Planting.html",
            controller: "alertCtrl"

        })
        .when("/Settings", {
            templateUrl: "app/activities/Settings.html",
            controller: "settingsCtrl"
        })
        .when("/Calendar", {
            templateUrl: "app/activities/Calendar.html",
        })
        .when("/Weather", {
            templateUrl: "app/activities/Weather.html",
            controller: "WeatherCtrl"

        })
        .when("/tasks", {
            templateUrl: "app/activities/tasks.html",
            controller: "tasksCtrl"
        })
        .when("/about", {
            templateUrl: "app/about/about.html",
        })
        .when("/reports", {
            templateUrl: "app/reports/reports.html",
            controller: "reportsCtrl"
        })
        .when("/newTask", {
            templateUrl: "app/newTask/newTask.html",
            controller: "newTaskCtrl",
            kindOfTask: "newtask"
        })
        .when("/taskdetails/:index", {
            templateUrl: "app/newTask/newTask.html",
            controller: "newTaskCtrl",
            kindOfTask: "reports"
        })
        .when("/taskemployee/:index", {
            templateUrl: "app/newTask/newTask.html",
            controller: "newTaskCtrl",
            kindOfTask: "employee"
        })
        .when("/alert", {
            templateUrl: "app/alert/alert.html",
            controller: "alertCtrl"
        })
        .when("/contact", {
            templateUrl: "app/contact/contact.html",
            controller: "contactCtrl"
        })
        .when("/links", {
            templateUrl: "app/links/links.html",
            controller: "linksCtrl"
        })


})