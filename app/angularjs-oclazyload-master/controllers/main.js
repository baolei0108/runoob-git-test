/**
 * mainCtrl
 * Created by pkcms.cn on 2016/6/24.
//  */
// (function () {
//     "use strict"
//     app.controller("mainCtrl", mainCtrlFn);
//     function mainCtrlFn() {
//         this.value = "Hello World";
//     }
// }())
// 

(function () {
"use strict"
app.controller('personCtrl', function($scope) {
    $scope.firstName = "John",
    $scope.lastName = "Doe",
    $scope.myVar = false,
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };

});

}())

