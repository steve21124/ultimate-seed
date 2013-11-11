/*
 * client/js/posts/index.js
 */

'use strict';

var angular = require('angular'),
    rhtml = require('rhtml');

var ngModule = angular.module('app.posts', []);

// Routes
ngModule.config(function ($stateProvider) {
  $stateProvider
    .state('app.posts', {
      url: '/app-posts',
      views: {
        '@': {
          template: rhtml('./templates/posts.html'),
          controller: 'PostsCtrl'
        }
      }
    });
});

// Controllers
require('./controllers/posts')(ngModule);
