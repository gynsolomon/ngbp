/**
 * Created by solomon on 15/1/4.
 */

angular.module('ycmath.cb')
    .directive('uploadBtn', function () {
        return {
            templateUrl: 'cb/partials/directive.uploadbtn.tpl.html',
            transclude: true,
            controller: function ($scope, $element, $attrs) {
                $scope.selected = false;
                $scope.upload = function () {
                    $element.find('input').click();
                };

                $scope.filename = '';
                $element.find('input').bind('change', function (ev) {
                    var files = ev.target.files;
                    $scope.$apply(function () {
                        $scope.filename = files[0].name;
                        $scope.selected = true;
                    });
                });

                this.getCurrentFileName = function () {
                    return $scope.filename;
                };

                this.showPgb = function () {
                    return $scope.showPgb;
                };
            }
        };
    })

    .directive('uploadPgb', function ($interval) {
        return {
            require: '^uploadBtn',
            templateUrl: 'cb/partials/directive.uploadpgb.tpl.html',
            link: function (scope, element, attrs, uploadCtrl) {
                scope.showPgb = false;
                scope.$watch('selected',function(newValue){
                    scope.showPgb = newValue;
                    $interval(function(){
                        scope.showPgb = false;
                    },3000);
                });


            }

        };
    });
