var React = require('react');

var Main = React.createClass({
	render: function() {
		return (
			<div>test</div>
			{this.props.children}
		)
	}
});

module.exports = Main;