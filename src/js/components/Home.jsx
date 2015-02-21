/** @jsx React.DOM */
'use strict';

var React = require('react');
var ProductStore = require('../stores/ProductStore');
var FluxCart = require('./FluxCart');
var FluxProduct = require('./FluxProduct');

function getCartState() {
  return {
    product: ProductStore.getProduct(),
    selectedProduct: ProductStore.getSelected()
  };
}

var Home = React.createClass({
  getInitialState: function() {
    return getCartState();
  },
  componentDidMount: function() {
    ProductStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this._onChange);
  },
  render: function() {
    return (
      <div className="flux-cart-app">
        Flux Cart App
        <FluxCart />
        <FluxProduct product={this.state.product} selected={this.state.selectedProduct} />
      </div>
    );
  },
  // private function to setState upon Store changes
  _onChange: function() {
    this.setState(getCartState()) ;
  }
});

module.exports = Home;
