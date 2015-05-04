'use strict';

var $ = require('jquery'),
    Backbone = require('backbone'),
    Hostel = Backbone.Model.extend({}),
    HostelList = Backbone.Collection.extend({
        model: Hostel,
        url: 'http://api.weekendesk.com/api/weekends.json?orderBy=priceQuality&locale=fr_FR&limit=50&page=0',
        parse: function(data) {
            return data.exactMatch;
        }
    }, {
        // singleton pattern
        getList: function() {
            HostelList.singleton = HostelList.singleton || new HostelList();
            return HostelList.singleton;
        }
    });

module.exports = HostelList;
