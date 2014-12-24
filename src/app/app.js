/**
 * Created by solomon on 14/12/24.
 */
angular.module('ycmath', [
    'templates-app',
    'templates-common',
    'ycmath.editor',
    'ui.router'
])
.config(function myAppConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/editor');
})

.run(function run() {
})

.controller('AppCtrl', function AppCtrl($scope, $location) {
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
            $scope.pageTitle = toState.data.pageTitle + ' | 洋葱数学';
        }
    });
});