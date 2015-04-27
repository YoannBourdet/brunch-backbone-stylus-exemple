'use strict';

var $ = require('jquery'),
    Backbone = require('backbone'),
    View = require('views/view'),
    hostelList = require('entities/hostelList'),
    homeTmp = require('templates/hostelList'),
    HomeView = View.extend({
        el: '#main',
        events: {
            'click .hostel.list': 'displayHostel'
        },
        initialize: function() {
            this.collectionFetch(hostelList);
        },
        render: function() {
            this.$el.html(homeTmp({
                items: this.collection.models
            }));
            return this;
        },
        displayHostel: function(e) {
            var id = $(e.currentTarget).data("id");
            Backbone.history.navigate('hotels/' + id, {
                trigger: true
            });

        }
    });

module.exports = HomeView;
