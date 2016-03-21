var React = require('react');
var PromptForm = require('./PromptForm');
var styles = require('../styles');

var Prompt = React.createClass({
	render: function() {
		return (
			<div style={styles.mainPage}>
				<h1 style={styles.formHeader}>{this.props.header}</h1>
				<PromptForm 
					city={this.props.city}
					onUpdateCity={this.props.onUpdateCity}
					onSubmitCity={this.props.onSubmitCity} 
				/>
			</div>
		)
	}
});

module.exports = Prompt;