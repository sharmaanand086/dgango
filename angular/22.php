<!DOCTYPE html>
<html ng-app="demoApp">
<head>
	<title> filter searching data </title>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.4/angular.min.js"></script>
	<script src="angular.min.js"></script>
	<script src="22.js"></script>
	 
</head>
<body ng-controller="demoController">
	   <span ng-repeat="cntry in country">
       <button ng-click="scrollTo(cntry.country)">{{cntry.country}}</button>
   </span>
   <br /><br />
   <div class="containerDiv">
       <fieldset ng-repeat="cntry in country" id="{{cntry.country}}">
           <legend>{{cntry.country}}</legend>
           <ul>
               <li ng-repeat="city in cntry.city">
                    {{cities.city}}
               </li>
           </ul>
       </fieldset>
   </div>
</body>
 </html>