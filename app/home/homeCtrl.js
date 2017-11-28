gardenApp.controller("homeCtrl", function ($scope, $http, $location, activeUser, User) {
        
            // TODO: Detele this
            $scope.email = "chensha07@gmail.com";
            $scope.password = "123";
        
            $http.get("app/model/data/json/users.json").then(function (response) {
                $scope.users = [];
                for (var i = 0; i < response.data.length; i++) {
                    $scope.users.push(new User(response.data[i]));
                }
        
                //console.log(JSON.stringify($scope.users));
            });
        
            $scope.failedAttempt = false;
        
            $scope.login = function() {
                var user = getLoggedInUser();
                if (user != null) {
                    activeUser.login(user);
                    //$uibModalInstance.close("Logged-in");
                    $scope.user=user;
                    
                    $location.path("/managerMain")
                } else {
                    $scope.failedAttempt = true;
                }
        
        
        
        
                //console.log($scope.email + " " + $scope.password)
            }
        
            var getLoggedInUser = function() {
                for (var i = 0; i < $scope.users.length; i++) {
                    if ($scope.users[i].email === $scope.email && $scope.users[i].password === $scope.password) {
                        return $scope.users[i];
                    }
                }
                return null;
            }
        
            $scope.dismiss = function () {
                //$uibModalInstance.close("User dismissed");
            }
        });
 