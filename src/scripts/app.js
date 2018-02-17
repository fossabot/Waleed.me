
import angular from "angular";
import uiRouter from "@uirouter/angularjs";

let app = angular.module("app", [uiRouter]);


app.config(function ($stateProvider) {

    let Default = {
        name: "default",
        url: "/",
        templateUrl: "templates/home.html"
    };

    let Home = {
        name: "home",
        url: "",
        templateUrl: "templates/home.html"
    };

    let Resume = {
        name: "resume",
        url: "/resume",
        templateUrl: "templates/resume.html"
    };
    let Contact = {
        name: "contact",
        url: "/contact",
        templateUrl: "templates/contact.html"
    };

    let Experience = {
        name: "experience",
        url: "/experience",
        templateUrl: "templates/experience.html"
    };



    $stateProvider.state(Home);
    $stateProvider.state(Resume);
    $stateProvider.state(Contact);
    $stateProvider.state(Experience);
    $stateProvider.state(Default);

});


app.controller("MainController",["$scope", function ($scope) {

    $scope.name = "Alexander Khan Personal Website";
    
}]);