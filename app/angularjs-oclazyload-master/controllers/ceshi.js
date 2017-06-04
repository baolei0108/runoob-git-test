(function () {
"use strict"
app.controller('ceshiCtrl', function($scope,$state) {
	$scope.name="bao",
	$scope.test=function(){
      
      $state.go('app.ceshi2.list',{systemId: 'aaa'});

	};


});

}())