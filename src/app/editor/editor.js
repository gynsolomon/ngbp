/**
 * Created by solomon on 14/12/24.
 */
angular.module( 'ycmath.editor', [
    'ui.router',
    'ngMaterial'
])

.config(function config( $stateProvider ) {
    $stateProvider.state( 'editor', {
        url: '/editor',
        views: {
            "main": {
                controller: 'EditorCtrl',
                templateUrl: 'editor/editor.tpl.html'
            }
        },
        data:{ pageTitle: '课程编辑后台' }
    });
})

.controller( 'EditorCtrl', function EditorCtrl( $scope ) {

});