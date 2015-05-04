'use strict';

var $ = require('jquery'),
    Backbone = require('backbone'),
    View = require('views/view'),
    hostelList = require('entities/hostelList'),
    homeTmp = require('templates/hostelList'),
    HomeViewList = View.extend({
        tagName: 'div',
        className: 'wrapper',
        initialize: function() {
            this.collectionFetch(hostelList);
        },
        render: function() {
            this.collection.each(function(hostel) {
                var hostelDetail = new HomeViewDetail({
                    model: hostel
                });
                this.$el.append(hostelDetail.el);
            }, this);

            $('#main').html(this.$el);

            return this;
        }
    }),
    HomeViewDetail = Backbone.View.extend({
        tagName: 'div',
        className: 'hostel list',
        events: {
            'click': 'displayHostel'
        },
        initialize: function() {
            //console.log(this.model.attributes.review.average);
            this.$el.append(homeTmp({
                model: this.model
            }));
        },
        displayHostel: function(e) {
            var id = this.model.id;
            Backbone.history.navigate('hotels/' + id, {
                trigger: true
            });
        }
    });

module.exports = HomeViewList;
