'use strict';

var React = require('react');

var FluxCartActions = require('../actions/FluxCartActions');

var FluxProduct = React.createClass({
  addToCart: function(event) {
    console.log('FluxProduct.addToCart');
    var sku = this.props.selected.sku;
    var update = {
      name: this.props.product.name,
      type: this.props.selected.type,
      price: this.props.selected.price
    };
    FluxCartActions.addToCart(sku, update);
  },
  selectVariant: function(event) {
    FluxCartActions.selectProduct(event.target.value);
  },
  render: function() {
    var ImgProduct = require('../../img/' + this.props.product.image);
    var ats = (this.props.selected.sku in this.props.cartitems) ?
      this.props.selected.inventory - this.props.cartitems[this.props.selected.sku].quantity : this.props.selected.inventory;
    return (
      <div className="flux-product">
        <img src={ImgProduct}/>
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
        <button type="button" onClick={this.addToCart} disabled={ats > 0 ? '' : 'disabled'}>
          {ats > 0 ? 'Add To Cart' : 'Sold Out'}
        </button>
      </div>
    );
  }

});

module.exports = FluxProduct;
