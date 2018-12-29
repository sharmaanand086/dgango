var app = angular.module("myModule", ["ngRoute"]);
app.config(function ($routeProvider,$locationProvider) {
                $routeProvider
                    .when("/home", {
                        templateUrl: "Templates/home.html",
                        controller: "homeController"
                    })
                    .when("/courses", {
                        templateUrl: "Templates/courses.html",
                        controller: "coursesController"
                    })
                    .when("/students", {
                        templateUrl: "Templates/tudents.html",
                        controller: "studentsController"
                    })
                    .otherwise({
                    	redirectTo:"/home"
                    })
                    $locationProvider.html5Mode(true);
            });
            app.controller("homeController", function ($scope) {
                $scope.message = "Home Page";
            });
            app.controller("coursesController", function ($scope) {
                $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server", "AngularJS", "JavaScript"];
            });
             app.controller("studentsController", function ($scope, $http) {
                 $http({	 
						 url: 'students.php'
						}).then(function successCallback(response) {
							  console.log(response);
							   $scope.students = response.data;
							   	 
							 })
             });

