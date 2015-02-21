'use strict';

var React = require('react');

var FluxProduct = React.createClass({
  render: function() {
    return (
      <div className="flux-product">
        <h1 className="name">{this.props.product.name}</h1>
        <p className="description">{this.props.product.description}</p>
        <p className="price">Price: ${this.props.selected.price}</p>
      </div>
    );
  }

});

module.exports = FluxProduct;
