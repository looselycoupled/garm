/**
 *  update.js
 *  Model that represents a congressional floor status update
 *
 *  Example attributes:
 *
 *    {
 *      "chamber": "senate",
 *      "congress": 113,
 *      "legislative_day": "2014-06-04",
 *      "timestamp": "2014-06-04T21:42:15Z",
 *      "update": "S. Res. 218 (Honoring the legacy of A. Phillip Randolph). Agreed to by Unanimous Consent.",
 *      "bill_ids": [
 *        "sres218-113"
 *      ],
 *      "roll_ids": [],
 *      "legislator_ids": []
 *   }
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

  var UpdateModel = Backbone.Model.extend({



  });

  return UpdateModel;

});
