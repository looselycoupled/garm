/**
 *  feed.js
 *  Backbone view for displaying the list of floor updates
 *
 *  Author:   Allen Leis <allen.leis@gmail.com>
 *  Created:  2014-06-08T21:40:07.339436Z
 *  License:  see LICENSE.txt
 *
 */

// JS Hint directives and strict mode
/* globals define */
'use strict';

define(function(require){

  var _ = require('underscore');
  var Backbone = require('backbone');
  var Feed = require('app/collections/update');
  var UpdateView = require('app/views/update');

  var FeedView = Backbone.View.extend({

    el: '.feed',

    collection: new Feed(),

    initialize: function(){
      this.collection.fetch({ reset: true });
      this.listenTo(this.collection, 'reset', this.render);
    },

    render: function(){
      var el = this.$('ul');
      _.each(this.collection.models, function(model){
        var view = new UpdateView({ model: model });
        view.$el.addClass('list-group-item');
        el.append(view.render().$el);
      });
    }

  });

  return FeedView;
});
