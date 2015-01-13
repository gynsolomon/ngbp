/**
 * Created by solomon on 15/1/13.
 */

angular.module('ycmath.cb')
    .factory('CourseStructure', function () {
        return {
            tasks:[
                {
                    type:'elementary',
                    title:'基础'
                },
                {
                    type: 'advanced',
                    title: '提高'
                },
                {
                    type: 'challenge',
                    title: '挑战'
                }
            ]
        };
    });