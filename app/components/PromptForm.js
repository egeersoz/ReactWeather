var React = require('react');
var styles = require('../styles');

var PromptForm = React.createClass({
	render: function() {
		return (
			<div style={styles.flexForm}>
				<input 
					type="text" 
					className="form-control" 
					placeholder="City, State"
					onChange={this.props.onUpdateCity}
					value={this.props.city} 
				/>
				<button style={styles.buttonMargin} onClick={this.props.onSubmitCity} type="button" className="btn btn-success">
					Check weather
				</button>
			</div>
		)
	}
});

module.exports = PromptForm;