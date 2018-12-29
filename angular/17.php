<!doctype html>
<html>
 <head>
  <title>How to get data from MySQL with AngularJS - PHP</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js"></script>
  <script src="17.js"></script>
 
 </head>
 <body ng-app='myapp'>

  <div ng-controller="userCtrl">
  {{ error}}
  <table >
 
  <tr>
  <th>food name</th>
  <th>food category</th>
  <th>food description</th>
  </tr>
  
  <!-- Display records -->
  <tr ng-repeat="user in users">
  <td>{{user.foodname}}</td>
  <td>{{user.foodcata}}</td>
  <td>{{user.fdesc}}</td>
  </tr>
 
  </table>
  </div>
 
 </body>
</html>