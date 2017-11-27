var gardenApp = angular.module("gardenApp",["ngRoute"]);

gardenApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
        controller: "homeCtrl"
        })
        .when("/managerMain", {
            templateUrl: "app/manager/managerMain.html",
            controller: "managerMainCtrl"
        })
})
    /*
  gardenApp.controller("TestCtrl", function ($scope, User, activeUser) {

    var plainUser = {
        "email": "chensha07@gmail.com",
        "password": "nir123",
        "firstName": "Nir",
        "lastName": "Channes",
        "data": "nir-recipes.json"
    }

    var user = new User(plainUser);

    console.log(JSON.stringify(user));
    console.log(activeUser.isLoggedIn());
    activeUser.login(user);
    console.log(JSON.stringify(activeUser.get()));
    console.log(activeUser.isLoggedIn());
    activeUser.logout();
    console.log(activeUser.isLoggedIn());


    var plainRecipe = {
        "name": "Shakshuka",
        "description": "An amazing egg dish",
        "duration": 40,
        "ingrediants": "Eggs, Tomattos, Oil",
        "steps": "Heat the pan, put the eggs",
        "imageUrl": "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c0.37.1080.1080/17438558_192469144582319_1152478392830918656_n.jpg?ig_cache_key=MTQ3NTg0MDMxNjE4ODA0ODY4NA%3D%3D.2.c"
    }

    var recipe = new Recipe(plainRecipe);
    console.log(JSON.stringify(recipe));

    recipes.add(plainRecipe);
    recipes.add(plainRecipe);
    console.log(JSON.stringify(recipes.getAll()));
    recipes.removeAll();
    console.log(JSON.stringify(recipes.getAll()));
})
*/


