var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron col-md-12 text-center">
				<h1>Weather App</h1>
				<p className="lead">Check the weather... with class!</p>
				<Link to='/pickCity'>
					<button type="button" className="btn btn-lg btn-success">Get Started</button>
				</Link>
			</div>
		)
	}
});

module.exports = Home;