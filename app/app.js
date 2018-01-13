
let app = angular.module("app", ['ngRoute']);
var airbrake = new airbrakeJs.Client({projectId: 170160, projectKey: 'e6364d7496ed3bf9ff330d43e2a24971'});
var promise = airbrake.notify(`user id=${user_id} not found`);
promise.then(function(notice) {
    console.log('notice id', notice.id);
});
promise.catch(function(err) {
    console.log('airbrake error', err);
});

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