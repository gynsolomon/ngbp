/**
 * Created by solomon on 15/1/7.
 */

angular.module('ycmath.cb')
    .controller('ChapterOverviewCtrl', function testCtrl($scope, $state, $stateParams, Api, Util) {
        $scope.init = function () {
        };

        $scope.save = function () {
            Api.updateChapter($scope.chapter._id, $scope.chapter).then(function (data) {
                Util.showSaveSucceedToast();
            });
        };
    });
