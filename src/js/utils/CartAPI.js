'use strict';

var FluxCartActions = require('../actions/FluxCartActions');

module.exports = {
  getProductData: function() {
    console.log('getProductData');
    var data = JSON.parse(localStorage.getItem('product'));
    FluxCartActions.receiveProduct(data);
  }
};
