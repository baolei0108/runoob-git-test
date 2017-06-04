"use strict"
app.config(["$stateProvider","$urlRouterProvider",routeFn]);
function routeFn($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/main");
    $stateProvider
        .state("main",{
            url:"/main",
            templateUrl:"views/main.html",
            //controller:"personCtrl",
           // controllerAs:"main",
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load("controllers/main.js");
                }]
            }
        })
        .state("adminUser",{
            url:"/adminUser",
            templateUrl:"views/adminUser.html",
            controller:"adminUserCtrl",
            controllerAs:"adminUser",
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load("controllers/adminUser.js");
                }]
            }
        })

        .state("ceshi",{
            url:"/ceshi",
            templateUrl:"views/ceshi.html",
            //controller:"adminUserCtrl",
            //controllerAs:"adminUser",
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load("controllers/ceshi.js");
                }]
            }
        })

        .state("app",{
            abstract: true,
            url:"/app",
            template:'<div ui-view ></div>',
        })

        .state("app.ceshi2",{
            url:"/ceshi2",
            template:'<div ui-view ></div>',
        })

        .state("app.ceshi2.sys",{
            url:"/sys",
            //template:"this is app.ceshi2.sys",
        })

        .state('app.ceshi2.list', { //应用部署-默认安装
            url: '/list/:systemId/:versionId/:moduleId',
            templateUrl: 'views/list.html',
            //template:"this is app.ceshi2.list",
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load("controllers/list.js");
                }]
            }
        })
            
};