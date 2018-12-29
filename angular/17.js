var fetch = angular.module('myapp', []);

fetch.controller('userCtrl', ['$scope', '$http', function ($scope, $http) {
 $http({
 	//  or u can usr post method: 'get',
 	// or without method  also datadisplayed
		 // method: 'getdata',
		  url: 'getdata.php'
		 }).then(function successCallback(response) {
		  //console.log(response);
		   $scope.users = response.data;
		  // $log.info(response);		 
		 },function(reason){
		 	console.log(reason);
		 	$scope.error = reason.data;
		 });
}]);
