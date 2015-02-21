'use strict';

var React = require('react');

var FluxCartActions = require('../actions/FluxCartActions');

var FluxProduct = React.createClass({
  selectVariant: function(event) {
    FluxCartActions.selectProduct(event.target.value);
  },
  render: function() {
    return (
      <div className="flux-product">
        <h1 className="name">{this.props.product.name}</h1>
        <p className="description">{this.props.product.description}</p>
        <p className="price">Price: ${this.props.selected.price}</p>
        <select onChange={this.selectVariant}>
          {this.props.product.variants.map(function(variant, index){
              return (
                <option key={index} value={index}>{variant.type}</option> 
              )  
            }
          )}
        </select>
      </div>
    );
  }

});

module.exports = FluxProduct;
