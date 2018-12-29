application.config(function($routeProvider){
 $routeProvider.when('/',{
 	templateUrl :'partial/login.html',
 	controller:'angular_controller',
 }).when('/dashboard',{
 	templateUrl :'partial/dashboard.html',
 	controller:'angular_controller',
 }).when('/report',{
 	templateUrl :'partial/report.html',
 	controller:'angular_controller',
 }).when('/login',{
 	templateUrl :'partial/login.html',
 	controller:'angular_controller',
 });
});