var React = require('react');
var styles = require('../styles');

var Forecast = React.createClass({
	handleClick: function() {
		this.props.onForecastClick(this.props.forecastKey);
	},
	render: function() {
		return (
			<div style={styles.flexItem} onClick={this.handleClick}>
				<img src={"../app/images/" + this.props.icon + ".svg"} style={styles.weatherImage}/>
				<h4>{this.props.date}</h4>
			</div>
		)
	}
});

module.exports = Forecast;