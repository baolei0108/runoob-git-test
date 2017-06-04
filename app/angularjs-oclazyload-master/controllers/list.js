(function () {
"use strict"
app.controller('listCtrl', function($scope,$stateParams,MathService,chservice,$http) {
	 $scope.hello2="this is ui.hello!";//测试注入模块
     $scope.ceshi2=MathService.multiply(2,3);//测试ui-hello.js里面的factory
     $scope.ceshi=chservice.init(111);//测试service
     
     $http({
        method: 'GET',
        url: 'api/defaultExecute.json'
    }).success(function(data,status,headers,config) {
        //当相应准备就绪时调用
        $scope.defaultExecute=data.data;
    }).error(function(data,status,headers,config) {
        //当响应以错误状态返回时调用
    });//$http



    $scope.id=$stateParams.systemId,

    $scope.data={"data":[{"updateTime":"2017-04-24-03:05","id":"DEVOPS-1.0","version":"DEVOPS-1.0","modules":[{"moduleName":"devops_slave","id":"devops_slave"},
{"moduleName":"devops_master","id":"devops_master"}]}],"failed":false,"message":"级联查询版本模块信息成功","success":true},
    $scope.versionListData = $scope.data.data;

    $scope.casscade = {};
	angular.forEach($scope.versionListData,function(item,index){
	$scope.casscade[item.id] = item;								
	})
    
    
	$scope.getModeList = function(){
		    $scope.hello=$scope.versionId;
			$scope.moduleId = '';
			$scope.moduleListData=$scope.casscade[$scope.versionId].modules;
			}
     
});
	

app.directive("runoobDirective", function() {
    return {
        template : "测试指令：自定义指令!"
    };
});



}())