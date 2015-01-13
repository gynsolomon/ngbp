/**
 * Created by solomon on 15/1/13.
 */

angular.module('ycmath.cb')
    .controller('TopicCtrl', function testCtrl($scope, $state, $stateParams, Api, Util, topicsInPopulate) {
        $scope.init = function() {
            $scope.topics = topicsInPopulate.topics;
            _.find($scope.topics,function(topic){
                if(topic._id === $stateParams.topicId){
                    $scope.topic = topic;
                }
            });
        };

        //$scope.save = function () {
        //    Api.updateChapter($scope.chapter._id, $scope.chapter).then(function (data) {
        //        Util.showSaveSucceedToast();
        //    });
        //};
    });
