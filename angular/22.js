 var demoApp = angular.module("demoApp",[])
					 . controller("demoController",function($scope,$location,$anchorScroll,$http){
					 	  $http({
					 	//  or u can usr post method: 'get',
					 	// or without method  also datadisplayed
							 // method: 'getdata',
							  url: '22_3.php'
							 }).then(function successCallback(response) {
							  console.log(response);
							   $scope.country = response.data;
							  // $scope.city = response.data;
							  // $log.info(response);		 
							 });
							 

                         $scope.scrollTo = function (countryName) {
                             $location.hash(countryName);
                             $anchorScroll();
                         }
					 });