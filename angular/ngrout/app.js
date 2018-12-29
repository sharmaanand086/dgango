var application = angular.module('angular_app',['ngRoute']);

application.controller('angular_controller',function($scope){
	$scope.form = {
		email : '',
		password : '',
		keepme : false,
	}
	$scope.login = function(){
		$location.path('/dashboard');
	}
	$scope.logout = function(){
		$location.path('/login');
	}
});