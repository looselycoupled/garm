define(function(require){

  var MainView = require('./views/main');

  return {

    start: function(){
      new MainView();
    }
  };


});
