'use strict';

var $ = require('jquery'),
    Backbone = require('backbone'),
    hostel = Backbone.Model.extend({}),
    hostelList = Backbone.Collection.extend({
        model: hostel,
        url: 'http://api.weekendesk.com/api/weekends.json?orderBy=priceQuality&locale=fr_FR&limit=50&page=0',
        parse: function(data) {
            return data.exactMatch;
        }
    }, {
        // singleton pattern
        getList: function() {
            hostelList.singleton = hostelList.singleton || new hostelList;
            return hostelList.singleton;
        }
    });

module.exports = hostelList;
