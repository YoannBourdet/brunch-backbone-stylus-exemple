'use strict';

var $ = require('jquery'),
    Backbone = require('backbone'),
    _ = require('underscore'),
    View = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, 'collectionFetch', 'destroy');
        },
        /**
         * [collectionFetch permet de fetcher la collection qu'un seule fois
         * afin d'éviter de multiples requêtes vers le server, et gagner en rapidité]
         * @param  {[collection]} Collection [Backbone Collection]
         */
        collectionFetch: function(Collection) {
            var self = this;
            this.collection = Collection.getList();

            if (!this.collection.fetched || this.collection.fetched === undefined) {
                this.collection.fetch().success(function() {
                    self.collection.fetched = true;
                    self.render();
                });
            } else {
                self.render();
            }
        },
        destroy: function(cb) {
            this.remove();
            this.unbind();
            if (typeof cb === 'function') {
                cb();
            }
        },
    });

module.exports = View;
