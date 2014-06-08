/**
 *  main.js
 *  View management layer for the app.  Responsible for managing shared
 *  models and instantiating views.
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

  var Backbone = require('backbone');
  var FeedView = require('./feed');

  var MainView = Backbone.View.extend({

    initialize: function(){
      new FeedView();
    }

  });

  return MainView;
});
