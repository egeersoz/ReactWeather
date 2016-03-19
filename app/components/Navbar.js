var React = require('React');

var Navbar = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<div className="navbar-brand">
							{this.props.brand}
						</div>
					</div>
				</div>
			</nav>
		)
	}
});

module.exports = Navbar;