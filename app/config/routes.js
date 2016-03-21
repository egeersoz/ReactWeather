var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var WeatherContainer = require('../containers/WeatherContainer');
var ForecastContainer = require('../containers/ForecastContainer');
var WeatherContainer = require('../containers/WeatherContainer');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='pickCity' header='Enter city and state' component={PromptContainer} />
			<Route path='forecast/:pickCity' header='Pick a day' component={ForecastContainer} />
			<Route path='weather' component={WeatherContainer} />
		</Route>
	</Router>
);

module.exports = routes;