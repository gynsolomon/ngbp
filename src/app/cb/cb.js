/**
 * Created by solomon on 14/12/24.
 */
angular.module('ycmath.cb', [
    'ui.router',
    'ui.router.stateHelper',
    'ngMaterial',
    'placeholders',
    'ui.sortable',
    'ng-mfb' // this is for floating action button
])
    .value('defaultPublisherId','548e512225f66d3ef492faf3')

    .config(function config($stateProvider,stateHelperProvider) {
        stateHelperProvider.setNestedState({
            name: 'cb.editor',
            url: '/editor',
            templateUrl: 'cb/partials/editor.tpl.html',
            controller: 'EditorCtrl',
            children: [
                {
                    name: 'test',
                    url:'/test',
                    templateUrl: 'cb/partials/editor.test.tpl.html'
                }
            ],
            data: {pageTitle: '章节编辑'},
            resolve: {
                defaultPublisher: function ($http,$rootScope,defaultPublisherId) {
                    var allChaptersUrl = '/course/versions/' + defaultPublisherId + '/chapters' ;
                    return $http({method:'GET',url:$rootScope.HOST + allChaptersUrl});
                }
            }
        });

        $stateProvider.state('cb.transfer',{
            url: '/transfer',
            template: '<h2>功能开发中，敬请期待</h2>',
            data: {pageTitle: '教材转换'}
        });
    });