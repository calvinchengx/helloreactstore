/** @jsx React.DOM */
'use strict';

// load sass/scss
require('../sass/styles.scss');
// load plain css
// require('../css/styles.css'); 

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

var rootInstance = null;

// React Hot Loader
Router.run(routes, Router.HistoryLocation, function (Handler, state) {  // jshint ignore:line
    rootInstance = React.render(<Handler />, document.body);            // jshint ignore:line
});

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function() {
      // Help React Hot Loader figure out the root component instances on the page
      return [rootInstance];
    } 
  });
}
