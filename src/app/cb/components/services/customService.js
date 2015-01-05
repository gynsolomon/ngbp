/**
 * Created by solomon on 15/1/5.
 */

angular.module('ycmath.cb')
    .factory('customHttp', function ($q, $http) {
        return function (options) {
            var deferred = $q.defer();
            $http(options)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (err, status, headers, config) {
                    deferred.reject(err);
                    console.error(status, err);
                });
            return deferred.promise;
        };
    });