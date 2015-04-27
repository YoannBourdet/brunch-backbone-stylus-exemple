'use strict';

var $ = require('jquery'),
    Backbone = require('backbone'),
    _ = require('underscore'),
    View = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, 'collectionFetch');
        },
        /**
         * [collectionFetch permet de fetcher la collection qu'un seule fois
         * afin d'éviter de multiples requêtes vers le server, et gagner en rapidité]
         * @param  {[collection]} Collection [Backbone Collection]
         */
        collectionFetch: function(Collection) {
            var self = this;
            this.collection = Collection.getList();
            if (this.collection.length === 0) {
                this.collection.fetch().success(function() {
                    self.render();
                });
            } else {
                self.render();
            }
        },
    });

module.exports = View;
