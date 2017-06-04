var app=angular.module("myapp",['ui.router']);//声明angualrjs模块，并把ui-router传人angularjs模块
app.config(function ($stateProvider, $urlRouterProvider,$routerProvider) { //声明把$stateprovider和$urlrouterprovider路由引擎作为函数参数传人,为应用程序配置路由
     $urlRouterProvider
        .otherwise('/page1');
     $stateProvider    
        .state("page1", {
            url:"/page1",
            template: '<h1>My Contacts</h1>' 
        })
        .state("page2", {
            url:"/page2",
            templateUrl: "page2.html"
        })
        .state("page3", {
            url:"/page3",
            templateUrl: "page3.html"
        });
});


app.controller('LoginCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.name="baolei";

     }]);