/** @jsx React.DOM */
'use strict';

var React = require('react');
var ProductStore = require('../stores/ProductStore');

function getCartState() {
  return {
    product: ProductStore.getProduct(),
    selectedProduct: ProductStore.getSelected()
  };
}

var FluxCart = React.createClass({
  render: function() {
    return (
      <div>
        Cart
      </div>
    );
  }
});

var FluxProduct = React.createClass({
  render: function() {
    return (
      <div>
       Product 
      </div>
    );
  }

});

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
