/**
 * Created by solomon on 15/1/12.
 */
angular.module('ycmath.cb')
    .controller('ChapterContentsCtrl', function testCtrl($scope, $state, $stateParams, Api, Util, topicsInPopulate) {

        $scope.init = function() {
            $scope.topics = topicsInPopulate.topics;
            if($scope.topics.length === 0){
                $scope.topics.push({"name": "example", _id: 'example'});
            }
            $state.go('cb.editor.chapter.contents.topics.list',{topicId:$scope.topics[0]._id});
        };

        $scope.save = function () {
            Api.updateChapter($scope.chapter._id, $scope.chapter).then(function (data) {
                Util.showSaveSucceedToast();
            });
        };

        $scope.addNewTopic = function () {
            Api.postTopic(topicsInPopulate._id, {name: "ceshi topic"}).then(function (data) {
                $scope.topics.push(data);
            });
        };
    });
