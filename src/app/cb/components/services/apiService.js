/**
 * Created by solomon on 15/1/4.
 */

angular.module('ycmath.cb')
    .value('defaultPublisherId', '548e512225f66d3ef492faf3') // this is for 人教版
    .constant('HOST', 'http://localhost:3000') // server side has already configured cros

    .factory('Api', function (customHttp, HOST, defaultPublisherId) {
        var getDefaultPublisher = function () {
            var options = {
                method: 'GET',
                url: HOST + '/course/versions/' + defaultPublisherId + '/chapters'
            };
            return customHttp(options);
        };

        return {
            getDefaultPublisher: getDefaultPublisher
        };
    });
