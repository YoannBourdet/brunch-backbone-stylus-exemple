'use strict';

var $ = require('jquery'),
    Backbone = require('backbone'),
    Router = require('router'),
    App = App || {};

Backbone.$ = $;

App = {
    init: function() {
        // On instancie le router
        new Router();
    }
};

module.exports = App;
