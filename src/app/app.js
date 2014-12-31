/**
 * Created by solomon on 14/12/24.
 */
angular.module('ycmath', [
    'templates-app',
    'templates-common',
    'ycmath.cb',
    'ui.router'
])
    .constant('HOST','http://localhost:3000') // have already configured cros

    .config(function myAppConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/course-builder');
    $stateProvider.state('cb',{
        url: '/course-builder',
        templateUrl: 'cb/cb.tpl.html',
        data:{pageTitle:':-)'}
    });
})

.run(function run($rootScope,HOST) {
        $rootScope.HOST = HOST;
})

.controller('CbCtrl',function($state){
        $state.transitionTo('cb.editor');
    })

.controller('AppCtrl', function AppCtrl($scope, $location) {
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
            $scope.pageTitle = toState.data.pageTitle + ' | 课程后台';
        }
    });
});