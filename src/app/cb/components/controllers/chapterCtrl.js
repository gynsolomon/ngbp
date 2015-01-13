/**
 * Created by solomon on 15/1/4.
 */

angular.module('ycmath.cb')
    .controller('ChapterCtrl', function testCtrl($scope, $state, $stateParams) {
        $scope.init = function(){
            _.find($scope.chapters,function(chapter){
                if(chapter._id === $stateParams.chapterId){
                    $scope.chapter = chapter;
                }
            });
        };

        $scope.data = {
            selectedIndex: 0
        };
        $scope.next = function () {
            $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
        };
        $scope.previous = function () {
            $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
        };

        $scope.goToOverview = function () {
            $state.go('cb.editor.chapter.overview',{chapterId:$stateParams.chapterId});
        };

        $scope.goToTopics = function () {
            $state.go('cb.editor.chapter.contents.topics',{chapterId:$stateParams.chapterId});

        };
    });
