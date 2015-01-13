/**
 * Created by solomon on 14/12/24.
 */
angular.module('ycmath.cb', [
    'ui.router',
    'ui.router.stateHelper',
    'ui.sortable',
    'ui.bootstrap',
    'ngMaterial',
    'placeholders',
    'ng-mfb' // this is for floating action button
])

    .config(function config($stateProvider, stateHelperProvider) {
        stateHelperProvider.setNestedState({
            name: 'cb.editor',
            url: '/editor',
            templateUrl: 'cb/partials/editor.tpl.html',
            controller: 'EditorCtrl',
            children: [
                {
                    name: 'chapter',
                    url: '/chapter/{chapterId}',
                    abstract: true,
                    controller: 'ChapterCtrl',
                    templateUrl: 'cb/partials/editor.chapter.tpl.html',
                    children: [
                        {
                            name: 'overview',
                            url: '/overview',
                            controller:'ChapterOverviewCtrl',
                            templateUrl: 'cb/partials/editor.chapter.overview.tpl.html'
                        },
                        {
                            name: 'contents',
                            url: '/contents',
                            abstract: true,
                            template: '<ui-view/>',
                            resolve: {
                                topicsInPopulate: function(Api,$stateParams){
                                    return Api.getTopic($stateParams.chapterId);
                                }
                            },
                            children:[
                                {
                                    name: 'topics',
                                    url: '/topic',
                                    controller: 'ChapterContentsCtrl',
                                    templateUrl: 'cb/partials/editor.chapter.contents.tpl.html',
                                    children: [
                                        {
                                            name: 'list',
                                            url: '/:topicId',
                                            controller: 'TopicCtrl',
                                            templateUrl: 'cb/partials/editor.chapter.contents.topic.tpl.html'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            data: {pageTitle: '章节编辑'},
            resolve: {
                defaultPublisher: function (Api) {
                    return Api.getDefaultPublisher();
                }
            }
        });

        $stateProvider.state('cb.transfer', {
            url: '/transfer',
            template: '<h2>功能开发中，敬请期待</h2>',
            data: {pageTitle: '教材转换'}
        });
    });