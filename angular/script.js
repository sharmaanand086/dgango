///<reference path="angular.min.js"/>

/*
*
*
create module
create the controller
and register the controller with the module all in one line
*
*
*/

// one part// 
//var myApp= angular.module("myModule",[]);
// var myController = function($scope){
// 	$scope.message =" angular js tutorial";
// };	

//part two//
//var myApp= angular.module("myModule",[]);
// myApp.controller("myController",function($scope){
// 	$scope.message =" angular js tutorial";
// });

// part three // 
// var myApp= angular.module("myModule",[]);
// myApp.controller("myController",function($scope){
// 	var employee = {
// 		name :' anand',
// 		lastname :' sharma',
// 		age :'26'
// 	};
// 	$scope.employee =employee;
// });

// part four //

// var myApp= angular
// 				.module("myModule",[])
// 				.controller("myController",function($scope){
// 	var employee = {
// 		name :' anand',
// 		lastname :' sharma',
// 		age :'26'
// 	};
// 	$scope.employee =employee;});
 
 // part five // 
//  var myApp= angular
// 				.module("myModule",[])
// 				.controller("myController",function($scope){
// 	var country = {
// 		name :' maharastra',
// 		capital :' delhi',
// 		flag :'flag.png'
// 	};
// 	$scope.country =country;
// });

				//part six // 
// var myApp= angular
//                 .module("myModule",[])
//                 .controller("myController",function($scope){
//                 	var employees= [
//                 	{firstname:'anand',lastname:'sharma',gender:'male',salary:'50000'},
//                 	{firstname:'anand',lastname:'sharma',gender:'male',salary:'50000'},
//                 	{firstname:'anand',lastname:'sharma',gender:'male',salary:'50000'},
//                 	{firstname:'anand',lastname:'sharma',gender:'male',salary:'50000'},
//                 	{firstname:'anand',lastname:'sharma',gender:'male',salary:'50000'},
//                 	  ];

// 	$scope.employees =employees;
// });
//part six 2 // 
                var myApp= angular
                .module("myModule",[])
                .controller("myController",function($scope){
                	var countries=
                	 [
                	{
                		name:'anand',
                		cities:[
                		{ name:'london'},
                		{ name:'london2'},
                		{ name:'london3'},
                		] 
                	  },
                	  {
                		name:'anand2',
                		cities:[
                		{ name:'london2'},
                		{ name:'london23'},
                		{ name:'london33'}
                		] 
                	  },

						{
                		name:'anand3',
                		cities:[
                		{ name:'london4'},
                		{ name:'london24'},
                		{ name:'london34'}
                		] 
                	  }
                	  ];

	$scope.countries =countries;
});
 