
let app = angular.module("app", ['ngRoute']);


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