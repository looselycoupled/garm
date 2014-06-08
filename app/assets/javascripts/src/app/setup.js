/**
 *  setup.js
 *  bootstraps the JS application structure by setting up:
 *      - Backbone Router
 *      - AJAX config
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

  var $ = require('jquery');
  var Data = require('data');
  var Backbone = require('backbone');


  /**
   * adds api key header to all requests
   *
   * NOTE: The Sunlight Foundation Congress API does not properly support
   * OPTIONS requests at this time and so the key is appended to the
   * query string in require-bundle.js
   *
   * @type {Object} config object for ajax calls
   */
  // $.ajaxSetup({headers: {
  //   'X-APIKEY': '<%= ENV['SUNLIGHT_API_KEY'] %>',
  //   // 'accept':  'application/json',
  // }});


  /**
   * alternate method to append apikey to url
   *
   * NOTE: See require-bundle.js for actual implementation
   *
   * @param  {[type]} options         [description]
   * @param  {[type]} originalOptions [description]
   * @param  {[type]} jqXHR           [description]
   * @return {[type]}                 [description]
   */
  // $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
  //   if (options.url.indexOf('?') === -1) {
  //     options.url += '?';
  //   }
  //   options.url += 'apikey=' + Data.apiKey;
  // });

  var AppRouter = Backbone.Router.extend({

    routes: {
        "": "home",
    },

    home: function() {
      var app = require('app-home/app').start();
    },

  });

  new AppRouter();

  Backbone.history.start({
    pushState: true,
  });

});
