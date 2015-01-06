/**
 * Created by solomon on 15/1/4.
 */


angular.module('ycmath.cb')
    .controller('EditorCtrl', function EditorCtrl($scope, defaultPublisher, $mdDialog, Api) {
        $scope.chapters = defaultPublisher.chapters;
        $scope.tabs = [
            {title: '新章节', filter: 'unpublished'},
            {title: '已排期', filter: 'prepared'},
            //{title: '未排期',filter:'notScheduled'},
            {title: '已发布', filter: 'published'}
        ];

        $scope.sortableOptions = {
            "cursor": "move",
            "axis": 'y',
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
            $mdDialog.show({
                controller: DialogController,
                template:
                    '<md-dialog>' +
                        '<form>'+
                            '<md-content layout="row" layout-align="center center">' +
                                '<md-text-float label="章节名称" ng-model="chapter.name"></md-text-float>' +
                                '<md-button ng-click="saveNewChapter()" type="submit" class="md-primary">保存</md-button>'+
                            '</md-content>'+
                        '</form>'+
                    '</md-dialog>',
                targetEvent: ev,
                onComplete: init
            });

            function init (scope, element, options){
                // auto focus on chapter's name input area
                element.find('input').focus();
                scope.chapters = $scope.chapters;
            }
        };

        function DialogController($scope, $mdDialog, Api) {
            $scope.saveNewChapter = function () {
                Api.postChapter($scope.chapter).then(function(data){
                    $scope.chapters.push(data);
                    $mdDialog.hide('OK');
                });
            };

            $scope.cancel = function () {
                $mdDialog.cancel();
            };
        }

    });

