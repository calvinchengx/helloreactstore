'use strict';

var React = require('react');
var ProductStore = require('../stores/ProductStore');
var CartStore = require('../stores/CartStore');
var FluxCart = require('./FluxCart');
var FluxProduct = require('./FluxProduct');

function getCartState() {
  return {
    product: ProductStore.getProduct(),
    selectedProduct: ProductStore.getSelected(),
    cartItems: CartStore.getCartItems(),
    cartCount: CartStore.getCartCount(),
    cartTotal: CartStore.getCartTotal(),
    cartVisible: CartStore.getCartVisible()
  };
}

var FluxCartApp = React.createClass({
  getInitialState: function() {
    return getCartState();
  },
  componentDidMount: function() {
    ProductStore.addChangeListener(this._onChange);
    CartStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this._onChange);
    CartStore.removeChangeListener(this._onChange);
  },
  render: function() {
    return (
      <div className="flux-cart-app">
        Flux Cart App
        <FluxCart products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal} visible={this.state.cartVisible}/>
        <FluxProduct product={this.state.product} selected={this.state.selectedProduct} cartitems={this.state.cartItems}/>
      </div>
    );
  },
  // private function to setState upon Store changes
  _onChange: function() {
    this.setState(getCartState()) ;
  }
});

module.exports = FluxCartApp
