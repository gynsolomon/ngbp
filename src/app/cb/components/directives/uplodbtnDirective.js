/**
 * Created by solomon on 15/1/4.
 */

angular.module('ycmath.cb')
    .directive('uploadBtn', function () {
        return {
            templateUrl: 'cb/partials/directive.uploadbtn.tpl.html',
            transclude: true,
            scope:{

            },
            controller: function ($scope, $element, $attrs) {
                $scope.showPgb = false;
                $scope.upload = function () {
                    $element.find('input').click();
                };

                $scope.filename = '';
                $element.find('input').bind('change', function (ev) {
                    var files = ev.target.files;
                    $scope.$apply(function () {
                        $scope.filename = files[0].name;
                        $scope.showPgb = true;
                    });
                });
            }
        };
    });
