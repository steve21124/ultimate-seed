/*
 * client/js/posts/controllers/status.js
 */

'use strict';

exports = module.exports = function (ngModule) {
  ngModule.controller('PostsCtrl', function ($scope, $http) {
    $scope.status = [];
    $scope.fetch = function() {
      $http.get('/posts').then(function (res) {
        $scope.status.unshift(res.data);
      });
    };
    $scope.fetch();
  });
};
