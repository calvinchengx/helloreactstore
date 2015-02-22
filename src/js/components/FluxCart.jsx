'use strict';

var React = require('react');

var FluxCart = React.createClass({

  render: function() {
    console.log('FluxCart rendering');
    var products = this.props.products;
    return (
      <div className="flux-cart">
        Products currently in Cart
        <ul>
          {Object.keys(products).map(function(product) {
                return (
                    <li>
                        {products[product].name}
                    </li> 
                ) 
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = FluxCart;
