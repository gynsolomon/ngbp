/**
 * Created by solomon on 14/12/24.
 */
angular.module('ycmath', [
    'templates-app',
    'templates-common',
    'ycmath.cb',
    'ui.router'
])
.config(function myAppConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/cb');
    $stateProvider.state('cb',{
        url: '/cb',
        controller: function($state){$state.go('cb.editor');},
        templateUrl: 'cb/cb.tpl.html',
        data:{pageTitle:':-)'}
    });
})

.run(function run() {
})

.controller('AppCtrl', function AppCtrl($scope, $location) {
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
            $scope.pageTitle = toState.data.pageTitle + ' | 课程后台';
        }
    });
});