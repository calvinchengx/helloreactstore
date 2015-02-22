'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');

var _products = {};
var _cartVisible = false;

function add(sku, update) {
  console.log('function add');
  update.quantity = sku in _products ? _products[sku].quantity + 1 : 1;
  _products[sku] = _.extend({}, _products[sku], update);
}

function setCartVisible(cartVisible) {
  _cartVisible = cartVisible;
}

function removeItem(sku) {
  delete _products[sku];
}

var CartStore = _.extend({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit('change');
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },
  getCartItems: function() {
    console.log('CartStore.getCartItems');
    console.log(_products);
    return _products;
  },
  getCartCount: function() {
    return Object.keys(_products).length;
  }


});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    // respond to CART_ADD
    case 'CART_ADD':
      console.log('CartStore dispatcher CART_ADD');
      add(action.sku, action.update);
      break;
    default:
      return true;
  }
  
  CartStore.emitChange();
  return true;

});

module.exports = CartStore;
