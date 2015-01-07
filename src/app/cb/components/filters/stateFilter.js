/**
 * Created by solomon on 15/1/6.
 */

angular.module('ycmath.cb').filter('stateFilter',function(){
    return function(chapters, filters){
        return _.filter(chapters,function(chapter){
            return filters.indexOf(chapter.state) > -1;
        });
    };
});