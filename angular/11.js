var myApp= angular.module("myModule",[]);
myApp.controller("myController",function($scope){
	var employees= [
                	{firstname:'anand',dob:'01091992',gender:'male',salary:'50000',city:'delhi'},
                	{firstname:'mahesh',dob:'02091992',gender:'male',salary:'5000',city:'mumbai'},
                	{firstname:'amit',dob:'22091992',gender:'f',salary:'5000',city:'allahabad'},
                	{firstname:'vikas',dob:'05091992',gender:'f',salary:'50',city:'up'},
                	{firstname:'zebra',dob:'21091992',gender:'male',salary:'5000',city:'uk'},
                	  ];

	$scope.employees =employees;
	$scope.sortColumn='firstname';
	$scope.reverseSort =  false;

	 $scope.sortData =  function(column){
	 	$scope.reverseSort = ($scope.sortColumn ==  column) ? !$scope.reverseSort:false;
	 	$scope.sortColumn =  column;

	 }
   $scope.getSortClass = function(column){
   	if($scope.sortColumn == column){
   		return $scope.reverseSort ? 'arrow-down':'arrow-up'
   	}
   	return '';
   }
});	