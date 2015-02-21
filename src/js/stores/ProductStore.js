'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');

var _product = {};
var _selected = null;

// load product data from mock API
function loadProductData(data) {
  _product = data[0];
  _selected = data[0].variants[0];
}

// set currently selected product variation
function setSelected(index) {
  _selected = _product.variants[index];
}

var ProductStore = _.extend({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit('change');
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  },
  getProduct: function() {
    return _product;
  },
  getSelected: function() {
    return _selected;
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case 'RECEIVE_DATA':
      loadProductData(action.data);
      break;
    case 'SELECT_PRODUCT':
      setSelected(action.data);
      break; 
    default:
      return true;
  }

  ProductStore.emitChange();
  return true;

});

module.exports = ProductStore;
