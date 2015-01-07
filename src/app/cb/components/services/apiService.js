/**
 * Created by solomon on 15/1/4.
 */

angular.module('ycmath.cb')
    .constant('HOST', 'http://localhost:3000') // server side has already configured cros
    .value('defaultPublisherId', '548e512225f66d3ef492faf3') // this is for 人教版
    .value('API_URL', {
        getChapter:     '/course/versions/:courseVersionId/chapters', // with populate, actually we can just get default publisher
        postChapter:    '/chapters/course/version/:courseVersionId',
        putChapter:     '/chapters/:chapterId',
        deleteChapter:  '/course/version/:courseVersionId/chapter/:chapterId',
        getTopic:       '/chapters/:chapterId/topics', // with populate, actually we can just get this chapter with topics
        postTopic:      '/topics/chapter/:chapterId',
        putTopic:       '/topics/:topicId',
        deleteTopic:    '/chapters/:chapterId/topics/:topicId'
    })

    .factory('Api', function (customHttp, HOST, API_URL, defaultPublisherId) {
        var getDefaultPublisher = function () {
            var options = {
                method: 'GET',
                url: HOST + API_URL.getChapter.replace(':courseVersionId', defaultPublisherId)
            };

            return customHttp(options);
        };

        var postChapter = function (data) {
            var options = {
                method: 'POST',
                url: HOST + API_URL.postChapter.replace(':courseVersionId', defaultPublisherId),
                data: {chapter: data},
                headers: {
                    'Content-Type':'application/json;charset=utf8'
                }
            };

            return customHttp(options);
        };

        var updateChapter = function (chapterId, data) {
            var options = {
                method: 'PUT',
                url: HOST + API_URL.putChapter.replace(':chapterId', chapterId),
                data: {chapter: data},
                headers: {
                    'Content-Type':'application/json;charset=utf8'
                }
            };

            return customHttp(options);
        };

        var deleteChapter = function (chapterId) {
            var options = {
                method: 'DELETE',
                url: HOST + API_URL.deleteChapter.replace(':courseVersionId', defaultPublisherId).replace(':chapterId',chapterId)
            };

            return customHttp(options);
        };

        return {
            getDefaultPublisher: getDefaultPublisher,
            postChapter: postChapter,
            updateChapter: updateChapter,
            deleteChapter: deleteChapter
        };
    });
