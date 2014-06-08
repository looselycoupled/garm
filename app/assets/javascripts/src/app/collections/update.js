/**
 *  update.js
 *  Backbone collection for floor updates
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

  var Data = require('data');
  var Backbone = require('backbone');
  var UpdateModel = require('../models/update');

  var UpdateCollection = Backbone.Collection.extend({

    url: Data.api('floor_updates'),

    model: UpdateModel,

    parse: function(data){
      return data.results;
    },

  });

  return UpdateCollection;

});
