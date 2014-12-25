/**
 * Created by solomon on 14/12/24.
 */
angular.module('ycmath.editor', [
    'ui.router',
    'ngMaterial',
    'placeholders',
    'ui.sortable',
    'restangular'
])

.config(function config($stateProvider) {
    $stateProvider.state('editor', {
        url: '/editor',
        views: {
            "main": {
                controller: 'EditorCtrl',
                templateUrl: 'editor/editor.tpl.html'
            }
        },
        data: {pageTitle: '课程编辑后台'}
    });
})

.controller('EditorCtrl', function EditorCtrl($scope) {
    $scope.chapters = [
        {
            "_id": "538fe05c76cb8a0068b14031",
            "name": "三角形",
            "seq": 5,
            "count": 15,
            "url": "http://yc-course.qiniudn.com/53ad36eb4e02f85b4d60fb73"
        }, {
            "_id": "539fb9834353b42976e62d72",
            "name": "全等三角形",
            "seq": 6,
            "count": 9,
            "url": "http://yc-course.qiniudn.com/53be52fb9c3ca65b14f4778b"
        }, {
            "_id": "53c5dc760dfa1851145f8847",
            "name": "有理数",
            "seq": 1,
            "count": 26,
            "url": "http://yc-course.qiniudn.com/53f2c0e5d447386613595f58"
        }, {
            "_id": "53e037116a3401fd615bd75c",
            "name": "整式的加减",
            "seq": 2,
            "count": 20,
            "url": "http://yc-course.qiniudn.com/54324066b70f2e237c4d6d7d"
        }, {
            "_id": "53f56f2f6dc0068a6f107f98",
            "name": "整式的乘法与因式分解",
            "seq": 7,
            "count": 27,
            "url": "http://yc-course.qiniudn.com/54266010ae4df63d0159e93d"
        }, {
            "_id": "5409b508c34d6dc35117f23e",
            "name": "分式",
            "seq": 8,
            "count": 18,
            "url": "http://yc-course.qiniudn.com/545b223a471d022d3b386673"
        }, {
            "_id": "5426b762fb55fb7b13587419",
            "name": "一元一次方程",
            "seq": 3,
            "count": 15,
            "url": "http://yc-course.qiniudn.com/5440eafd8532d4ee084fe2e2"
        }, {
            "_id": "5440df6c70ef3ff008c78c85",
            "name": "实数",
            "seq": 4,
            "count": 11,
            "url": "http://yc-course.qiniudn.com/547bd2856a11756e5d1a2e25"
        }];
    $scope.tabs = [
        {title: '新章节', content: "Tabs will become paginated if there isn't enough room for them."},
        {title: '已排期', content: "You can swipe left and right on a mobile device to change tabs."},
        {title: '未排期', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
        {title: '已发布', content: "If you set the selected tab binding to -1, it will leave no tab selected."}
    ];

    $scope.sortableOptions = {
        "cursor": "move",
        "placeholder": 'chapter-sort',
        "connectWith": '.chapter-list',
        start: function( event, ui ) {
            var placeholder = ui.placeholder;
            var item = ui.item;
            placeholder.width(ui.item.width());
            placeholder.height(ui.item.height());
            placeholder.css('border-radius','5px');
            item.css('background-color','#e5e5e5');
            item.css('-ms-transform', 'rotate(10deg)');
            item.css('-webkit-transform', 'rotate(10deg)');
            item.css('transform', 'rotate(10deg)');
        },
        stop: function( event, ui ) {
            var item = ui.item;
            item.css('background-color','white');
            item.css('-ms-transform', 'rotate(0deg)');
            item.css('-webkit-transform', 'rotate(0deg)');
            item.css('transform', 'rotate(0deg)');
        }
    };

    angular.element(document).ready(function () {
        $('.chapter-list').bind("scroll", function(e) {
            if($(this).scrollLeft() > 1) {
                e.preventDefault();
                $(this).scrollLeft(0);
            }
        });
    });

    $scope.data = {
        selectedIndex : 0
    };
    $scope.next = function() {
        $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
        $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };

});