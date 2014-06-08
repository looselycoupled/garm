requirejs.config({
  baseUrl: 'path/to/app-codebase', // << Override this in application config.
  paths: {
    'analytics': '../vendor/cobrain-analytics',
    'backbone': '../vendor/backbone',
    'data': '../vendor/cobrain-data',
    'hammer': '../vendor/hammer',
    'jquery': '../vendor/jquery',
    'jquery.colorbox': '../vendor/jquery.colorbox',
    'jquery.scrollto': '../vendor/jquery.scrollto',
    'jquery.autocomplete': '../vendor/jquery.ui.autocomplete',
    'store': '../vendor/store',
    'text': '../vendor/require-text',
    'underscore': '../vendor/underscore',
    'viewkit': '../vendor/backbone.viewkit'
  }
});
