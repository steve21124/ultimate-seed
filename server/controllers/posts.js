/*
 * server/controllers/posts.js
 */

'use strict';

function index(req, res) {
    res.render('posts/index', {
      layout: false
    });
}

// Public API
exports.index = index;
//exports.health = health;
