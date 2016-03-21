var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var styles = require('../styles');

var Home = React.createClass({
	render: function() {
		return (
			<div style={styles.mainPage}>
				<h1 style={styles.formHeader}>Weather App</h1>
				<p style={styles.whiteFont} className="lead">Check the weather... with React!</p>
				<Link to='/pickCity'>
					<button type="button" className="btn btn-success">Get Started</button>
				</Link>
			</div>
		)
	}
});

module.exports = Home;