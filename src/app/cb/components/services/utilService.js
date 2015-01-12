/**
 * Created by solomon on 15/1/12.
 */

angular.module('ycmath.cb')
    .factory('Util', function ($mdToast) {
        var showSaveSucceedToast = function () {
            $mdToast.show({
                controller: function ($scope, $mdToast) {
                    $scope.closeToast = function () {
                        $mdToast.hide();
                    };
                },
                template:
                    '<md-toast>' +
                        '<span flex>保存成功！</span>' +
                        '<md-button ng-click="closeToast()">Close</md-button>' +
                    '</md-toast>',
                position: 'top right'
            });
        };

        var showNetworkErrorToast = function(){
            $mdToast.show({
                controller: function ($scope, $mdToast) {
                    $scope.closeToast = function () {
                        $mdToast.hide();
                    };
                },
                template:
                '<md-toast style="background-color: #8b0000">' +
                '<span flex><strong>网络错误，操作未成功！</strong></span>' +
                '</md-toast>',
                hideDelay: 5000,
                position: 'top right'
            });
        };

        return {
            showSaveSucceedToast: showSaveSucceedToast,
            showNetworkErrorToast: showNetworkErrorToast
        };
    });