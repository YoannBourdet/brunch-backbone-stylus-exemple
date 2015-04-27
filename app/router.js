'use strict';

var $ = require('jquery'),
    Backbone = require('backbone'),
    HomeView = require('views/home'),
    HostelView = require('views/hostel'),
    Router = Backbone.Router.extend({
        routes: {
            '': 'displayHome',
            'hotels/:id': 'displayHostlel',
        },
        initialize: function() {
            Backbone.history.start();
        },
        displayHome: function() {
            new HomeView();
        },
        displayHostlel: function(id) {
            new HostelView({
                id: id
            });
        }
    });

module.exports = Router;
