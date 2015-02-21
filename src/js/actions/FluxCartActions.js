'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');

var FluxCartActions = {

  receiveProduct: function(data) {
    console.log('receiveProduct');
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
  }

};

module.exports = FluxCartActions;
