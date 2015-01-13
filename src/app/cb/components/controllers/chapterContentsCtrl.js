/**
 * Created by solomon on 15/1/12.
 */
angular.module('ycmath.cb')
    .controller('ChapterContentsCtrl', function testCtrl($scope, $state, $stateParams, Api, Util, topicsInPopulate) {

        $scope.init = function() {
            $scope.topics = topicsInPopulate.topics;
            $scope.exampleTopic = {"name": "example", _id: 'example'};

            var firstTopic = $scope.topics[0];
            if(firstTopic){
                $state.go('cb.editor.chapter.contents.topics.list',{topicId:firstTopic._id});
            }
        };

        $scope.save = function () {
            Api.updateChapter($scope.chapter._id, $scope.chapter).then(function (data) {
                Util.showSaveSucceedToast();
            });
        };

        $scope.addNewTopic = function () {
            Api.postTopic($scope.chapter._id, {name: "ceshi topic"}).then(function (data) {
                Util.showSaveSucceedToast();
                console.log(data);
            });
        };
    });
