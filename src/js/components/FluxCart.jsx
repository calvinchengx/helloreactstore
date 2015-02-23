'use strict';

var React = require('react');

var FluxCart = React.createClass({

  render: function() {
    console.log('FluxCart rendering');
    var self = this;
    var products = this.props.products;
    return (
      <div className="flux-cart">
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
    );
  }
});

module.exports = FluxCart;
