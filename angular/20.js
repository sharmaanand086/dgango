 ///<reference path="angular.min.js"/>

// var myApp=angular.module("myModule",[]).module("myModule", [])
//         .controller("myController", function ($scope) {
//             $scope.transformString = function (input) {
//                 if (!input){
//                     return input;
//                 }

//                 var output = "";

//                 for (var i = 0; i < input.length; i++) {
//                     if (i > 0 && input[i] == input[i].toUpperCase()) {
//                         output = output + " ";
//                     }

//                     output = output + input[i];
//                 }

//                 $scope.output = output;
//             };
//         });
var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope, stringService) {
            $scope.transformString = function (input) {
                $scope.output = stringService.processString(input);
            };
        });