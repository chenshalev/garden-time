gardenApp.controller("WeatherCtrl", function ($scope, $log, $http, $location, activeUser, tasks, $route, Task, activeTask) {

    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.user = activeUser.get();
    if (navigator.geolocation) {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function success(pos) {
            var crd = pos.coords;
            var golink = "https://fcc-weather-api.glitch.me/api/current?lat=" + crd.latitude + "&lon=" + crd.longitude;
            $http.get(golink).then(function mySuccess(response) {
                var result = response.data;
                $scope.place = result.name;
                $scope.image = result.weather[0].icon;
                $scope.weather = result.weather[0].main;
                $scope.temp = result.main.temp ;
                $scope.temp=($scope.temp-32) * 5 / 9;
                $scope.temp=Math.round($scope.temp);
                alert(golink);
  
            });
        }
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        };

        navigator.geolocation.getCurrentPosition(success, error, options);
    }

})

