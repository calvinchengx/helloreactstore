/** @jsx React.DOM */
'use strict';

var React = require('react');
var FluxCartApp = require('./FluxCartApp');
var ProductData = require('../ProductData');
var CartAPI = require('../utils/CartAPI');

ProductData.init();         // load mock product data into localStorage
CartAPI.getProductData();   // load mock API call

var Home = React.createClass({
  render: function() {
    return <FluxCartApp />
  }
});


module.exports = Home;
