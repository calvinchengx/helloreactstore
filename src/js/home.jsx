/** @jsx React.DOM */
'use strict';

var React = require('react');

var JustForFun = React.createClass({
  render: function() {
    return (
        <div>Just for fun!</div>
    );
  }
});

var Home = React.createClass({
  render: function() {
    return (
      <div>
        Home
        <JustForFun/>
      </div>
    );
  }
});

module.exports = Home;
