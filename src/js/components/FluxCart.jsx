'use strict';

var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions');

var FluxCart = React.createClass({
  closeCart: function() {
    console.log("FluxCart.closeCart");
    FluxCartActions.updateCartVisible(false);
  },
  openCart: function() {
    FluxCartActions.updateCartVisible(true);
  },
  render: function() {
    console.log('FluxCart rendering');
    var self = this;
    var products = this.props.products;
    return (
      <div className={"flux-cart " + (this.props.visible ? 'active' : '')}>
        {this.props.visible}
        <div className="mini-cart"> 
          <button type="button" className="close-cart" onClick={this.closeCart} disabled="">x</button>
          Products currently in Cart
          <ul>
            {Object.keys(products).map(function(product) {
                  return (
                      <li>
                        <h1 className="name">{products[product].name}</h1> 
                        <p className="type">{products[product].type} x {products[product].quantity}</p>
                        <p className="price">${(products[product].price * products[product].quantity).toFixed(2)}</p>
                      </li> 
                  ) 
              })
            }
          </ul>
          <span className="total">Total: ${self.props.total}</span>
        </div>
        <button type="button" className="view-cart" onClick={this.openCart} disabled="">
          View Cart
        </button>
        {/* test */}
    </div>
    );
  }
});

module.exports = FluxCart;
