/**
 * Created by solomon on 15/1/13.
 */

angular.module('ycmath.cb')
    .directive('addElementBtn', function ($compile) {
        return {
            templateUrl: 'cb/partials/directive.addelementbtn.tpl.html',
            scope:{
                btnText: '@',
                action: '&',
                created: '='
            },
            link: function (scope, element, attrs) {

            }
        };
    });
