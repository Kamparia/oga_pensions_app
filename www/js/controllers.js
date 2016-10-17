angular.module('app.controllers', [])
  
.controller('ogaPensionsCtrl', function($scope) {

})
  
.factory('dataService', function() {

  // private variable
  var _dataObj = '19,000,000.00';

  // public API
  return {
    dataObj: _dataObj
  };
})

.controller('pensionCalculatorCtrl', function($scope) {
    $scope.list = [];
    $scope.submitForm = function () {
        var names = $scope.names;
        $scope.list.push(names);

        var balance = $scope.balance;
        $scope.list.push(balance);

        var salary = $scope.salary;
        $scope.list.push(salary);

        var current_age = $scope.current_age;
        $scope.list.push(current_age);

        var retire_age = $scope.retire_age;
		$scope.list.push(retire_age);
        
		var personal = 0.08 * salary;
		var official = 0.1 * salary;
		var total_savings = personal + official;

		var year_diff = retire_age - current_age;

		var total_value = (total_savings * year_diff * 12) + balance;

		//alert(total_value);

		$location.path('/page5');
    }

})


.controller('resultsCtrl', function($scope, dataService) {
	$scope.total_value = dataService.dataObj;

})
   
.controller('successCtrl', function($scope) {

})
   
.controller('openAccountCtrl', function($scope) {

})

 