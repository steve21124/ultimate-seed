/*
 * client/js/posts/controllers/status.js
 */

'use strict';

exports = module.exports = function (ngModule) {
  ngModule.controller('PostsCtrl', function ($scope, $http) {
    $scope.posts = [];
    $scope.fetch = function() {
      $http.get('/posts').then(function (res) {
		//angularjs http.get automatically parse json
	      $scope.posts = res.data.photos;
      });
    };
    $scope.fetch();
  });
};
