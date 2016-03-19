var React = require('react');
var Navbar = require('./Navbar');

var Main = React.createClass({
	render: function() {
		return (
			<div>
				<Navbar brand="ReactWeather"/>
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
});

module.exports = Main;