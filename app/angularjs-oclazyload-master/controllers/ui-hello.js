(function () {
'use strict';

angular.module('ui.hello', [])

.service('chservice', function () {
     var num;
     return{
     	init:function(a1){
     		//template:"this is service!";
     		return a1;
     	}
     }
})

.factory('MathService', function() {
         var factory = {};
         factory.multiply = function(a, b) {
             return a * b;
            }
        return factory;
});

   
})();


