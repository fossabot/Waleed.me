
import angular from "angular";
import uiRouter from "@uirouter/angularjs";
let template = require("../../templates-cache.js");
let templateCache = "templateCache"; // Value for templates-cache dependency injection



let app = angular.module("app", [uiRouter, templateCache]);

app.config(function ($stateProvider) {

    let Default = {
        name: "default",
        url: "/",
        templateUrl: "home.html"
    };

    let Home = {
        name: "home",
        url: "",
        templateUrl: "home.html"
    };

    let Resume = {
        name: "resume",
        url: "/resume",
        templateUrl: "resume.html"
    };
    let Contact = {
        name: "contact",
        url: "/contact",
        templateUrl: "contact.html"
    };

    let Experience = {
        name: "experience",
        url: "/experience",
        templateUrl: "experience.html"
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