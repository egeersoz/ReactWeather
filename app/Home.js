var React = require('react');
var ReactRouter = require('react-router');

var Home = React.createClass({
	render: function() {
		return (
			<div class="col-md-4 col-md-offset-4 text-center">
				<h1>Fancy Weather App</h1>
			</div>
		)
	}
});

module.exports = Home;