/**
 *  update.js
 *  Backbone view for displaying a single floor update
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
  var UpdateHTML = require('text!../templates/update.html');

  var UpdateView = Backbone.View.extend({

    tagName: 'li',

    template: _.template(UpdateHTML),

    render: function(){
      this.$el.html( this.template(this.model.toJSON()) );
      return this;
    },

  });

  return UpdateView;

});
