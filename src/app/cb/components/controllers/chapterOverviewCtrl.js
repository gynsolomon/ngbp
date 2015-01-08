/**
 * Created by solomon on 15/1/7.
 */

angular.module('ycmath.cb')
    .controller('ChapterOverviewCtrl', function testCtrl($scope, $state, $stateParams) {
        $scope.init = function () {
            $scope.filename = '';
            angular.element('#chapter-bimg-input').bind('change',function(ev){
                var files = ev.target.files;
                $scope.$apply(function(){
                    $scope.filename = files[0].name;
                });
            });
        };

        $scope.uploadBimg = function () {
            angular.element('#chapter-bimg-input').click();
        };
    });
