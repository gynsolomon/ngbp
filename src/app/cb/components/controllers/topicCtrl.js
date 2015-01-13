/**
 * Created by solomon on 15/1/13.
 */

angular.module('ycmath.cb')
    .controller('TopicCtrl', function testCtrl($scope, $state, $stateParams, Api, Util,
                                               topicsInPopulate, tasksInPopulate, CourseStructure) {
        $scope.init = function () {
            $scope.topics = topicsInPopulate.topics;
            _.find($scope.topics, function (topic) {
                if (topic._id === $stateParams.topicId) {
                    $scope.topic = topic;
                }
            });
            $scope.taskEnums = CourseStructure.tasks;
            $scope.availableTasks = tasksInPopulate.tasks;
        };

        $scope.save = function () {
            Api.updateTopic($scope.topic._id, $scope.topic).then(function (data) {
                Util.showSaveSucceedToast();
            });
        };

        $scope.isTaskCreated = function(taskEnum){
            return _.find($scope.availableTasks,function(task){
                return task.type === taskEnum.type;
            });
        };

        $scope.addTask = function (task) {
            Api.postTask($scope.topic._id,{name:task.title, type:task.type}).then(function(data){
                $scope.availableTasks.push(data);
            });
        };
    });
