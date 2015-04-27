'use strict';

var $ = require('jquery'),
    Backbone = require('backbone'),
    View = require('views/view'),
    hostelList = require('entities/hostelList'),
    hostelTmp = require('templates/hostel'),
    HostelView = View.extend({
        el: '#main',
        initialize: function() {
            this.collectionFetch(hostelList);
        },
        render: function() {
            var model = this.collection.get(this.id),
                weekends = model.get('weekend');
            this.$el.html(hostelTmp({
                weekends: weekends
            }));
            return this;
        }
    });

module.exports = HostelView;
