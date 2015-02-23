'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');

var FluxCartActions = {

  receiveProduct: function(data) {
    console.log('FluxCartActions.receiveProduct: ' + data);
    AppDispatcher.handleAction({
      actionType: 'RECEIVE_DATA',
      data: data
    });
  },
  selectProduct: function(index) {
    AppDispatcher.handleAction({
      actionType: 'SELECT_PRODUCT',
      data: index 
    });
  },
  addToCart: function(sku, update) {
    console.log('FluxCartActions.addToCart: ' + sku + ' ' + update);
    AppDispatcher.handleAction({
      actionType: 'CART_ADD',
      sku: sku,
      update: update
    });
  },
  updateCartVisible: function(cartVisible) {
    console.log('FluxCartActions.updateCartVisible ' + cartVisible);
    AppDispatcher.handleAction({
      actionType: 'CART_VISIBLE',
      cartVisible: cartVisible
    });
  }

};

module.exports = FluxCartActions;
