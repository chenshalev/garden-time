gardenApp.controller("WeatherCtrl", function ($scope, $log, $http, $location, activeUser, tasks, $route, Task,activeTask) {
 
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.user = activeUser.get();

    if (navigator.geolocation) {
        $scope.place="dsfdfsfd";
    }
    //navigator.geolocation.getCurrentPosition(function(position) {
       // var golink = " https://fcc-weather-api.glitch.me/api/current?lat="+position.coords.latitude+"&lon="+position.coords.longitude;
   //$.getJSON(golink, function(result){

    //place=result.place;
    //image=result.weather[0].main;
    //   $("#data").append("<h1>"+result.weather[0].main+"</h1>");
    //  $("#data").append("<h1>"+result.main.temp+"*C</h1>");
    //  $("#data").append("<h2>Humidity:"+result.main.humidity+"</h2>");
   })