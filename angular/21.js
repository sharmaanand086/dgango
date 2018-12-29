 var demoApp = angular.module("demoApp",[])
					 . controller("demoController",function($scope,$location,$anchorScroll){
					 	$scope.scrollTo = function(scroll){
					 		$location.hash(scroll);
					 		$anchorScroll.yOffset = 20;
					 		$anchorScroll.xOffset = 20;
					 		$anchorScroll();

					 	}
					 });