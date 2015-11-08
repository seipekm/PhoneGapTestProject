var ctrls = angular.module('MyCtrls', []);

ctrls.controller('AppCtrl', function($scope){

    console.log($scope);

    $scope.nameVal = "Phonegap & Angular";

    $scope.click = function () {
        $scope.nameVal = "CLICKED";
    }
});