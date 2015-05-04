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
        markCurrentView: function(view) {
            var self = this;
            if (this.currentView) {
                this.currentView.destroy(function() {
                    self.currentView = view;
                });
            } else {
                this.currentView = view;
            }
        },
        initialize: function() {
            Backbone.history.start();
        },
        displayHome: function() {
            var homeView = new HomeView();
            this.markCurrentView(homeView);
        },
        displayHostlel: function(id) {
            var hostelView = new HostelView({
                id: id
            });
            this.markCurrentView(hostelView);
        }
    });

module.exports = Router;
