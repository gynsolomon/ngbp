/**
 * Created by solomon on 14/12/24.
 */
angular.module('ycmath.cb', [
    'ui.router',
    'ui.router.stateHelper',
    'ngMaterial',
    'placeholders',
    'ui.sortable',
    'restangular',
    'ng-mfb' // this is for floating action button
])

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
                chaptersObj: function ($http,$rootScope) {
                    // $rootScope.HOST is configured in app.js as a constant
                    return $http({method: 'GET', url: $rootScope.HOST + '/course/versions/548e512225f66d3ef492faf3/chapters'});
                }
            }
        });


        $stateProvider.state('cb.transfer',{
            url: '/transfer',
            template: '<h2>功能开发中，敬请期待</h2>',
            data: {pageTitle: '教材转换'}
        });
    })

    .controller('EditorCtrl', function EditorCtrl($scope, chaptersObj, $mdDialog) {
        $scope.chapters = chaptersObj.data.chapters;
        console.log($scope.chapters);
        $scope.tabs = [
            {title: '新章节',filter:'unpublished'},
            {title: '已排期',filter:'prepared'},
            //{title: '未排期',filter:'notScheduled'},
            {title: '已发布',filter:'published'}
        ];

        $scope.sortableOptions = {
            "cursor": "move",
            "axis":'y',
            "placeholder": 'chapter-sort',
            start: function (event, ui) {
                var placeholder = ui.placeholder;
                var item = ui.item;
                placeholder.width(ui.item.width());
                placeholder.height(ui.item.height());
                placeholder.css('border-radius', '5px');
                item.css('background-color', '#e5e5e5');
                item.css('-ms-transform', 'rotate(10deg)');
                item.css('-webkit-transform', 'rotate(10deg)');
                item.css('transform', 'rotate(10deg)');
            },
            stop: function (event, ui) {
                var item = ui.item;
                item.css('background-color', 'white');
                item.css('-ms-transform', 'rotate(0deg)');
                item.css('-webkit-transform', 'rotate(0deg)');
                item.css('transform', 'rotate(0deg)');
            }
        };

        $scope.showEditDialog = function (ev) {
            console.log('add new chapter');
            $mdDialog.show({
                controller: DialogController,
                template:
                    '<md-dialog ng-init="init()">' +
                        '<md-content layout="row" layout-align="center center">' +
                            '<md-text-float id="newchapter" label="章节名称" ng-model="chapter.name"></md-text-float>' +
                            '<md-button class="md-raised md-primary" ng-click="saveNewChapter()">保存</md-button>' +
                        '</md-content>' +
                    '</md-dialog>',
                targetEvent: ev
            }).then(function (answer) {
                $scope.alert = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.alert = 'You cancelled the dialog.';
            });
        };

        function DialogController($scope, $mdDialog) {

            $scope.init = function(){
                $scope.chapter = {name:'test'};
                $('#newchapter').focus();

            };
            $scope.saveNewChapter = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
        }

    });