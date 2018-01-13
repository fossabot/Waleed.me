
let app = angular.module("app", ['ngRoute','tandibar/ng-rollbar']);

//Rollbar config

myApp.config(['RollbarProvider', function(RollbarProvider) {
    RollbarProvider.init({
        accessToken: "3503879afb2c41188a02c1feaa198132",
        captureUncaught: true,
        payload: {
            environment: '<specify-your-env>'
        }
    });
}]);


app.config(function ($routeProvider) {
   $routeProvider

       .when('/',{
           templateUrl : 'templates/home.html'
       })

       .when('/resume',{
           templateUrl: 'templates/resume.html'
       })

       .when('/contact',{
           templateUrl: 'templates/contact.html'
       });

});

app.controller('MainController',['$scope', function ($scope) {

    $scope.name = 'Waleed Personal Website';
    
}]);