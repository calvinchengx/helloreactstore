/** @jsx React.DOM */
'use strict';

var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Routes = Router.Routes;

var App = require('./app');
var Home = require('./home');
var About = require('./about');

var routes = (
    <Route path="/" name="app" handler={App}>       
      <DefaultRoute name="home" handler={Home}/>    
      <Route name="about" handler={About}/>         
    </Route>                                        
);

module.exports = routes;
