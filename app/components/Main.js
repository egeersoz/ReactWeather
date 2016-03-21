var React = require('react');
var Navbar = require('./Navbar');
var styles = require('../styles');
require('../main.css');

var Main = React.createClass({
	render: function() {
		return (
			<div style={styles.almostFullHeight}>
				<Navbar />
				<div style={styles.fullHeight}>
					{this.props.children}
				</div>
			</div>
		)
	}
});

module.exports = Main;