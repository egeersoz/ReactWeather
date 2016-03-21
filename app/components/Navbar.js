var React = require('react');
var styles = require('../styles');

var Navbar = React.createClass({
	render: function() {
		return (
			<div style={styles.navbar}>
				<h3 style={styles.smallMargin}>ReactWeather</h3>
			</div>
		)
	}
});

module.exports = Navbar;