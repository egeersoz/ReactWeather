var React = require('react');
var styles = require('../styles');
var Forecast = require('./Forecast');

var Weather = React.createClass({
	render: function() {
		return (
			<div className="col-md-4 col-md-offset-4 text-center" style={styles.weatherListing}>
				<Forecast 
					date={this.props.date} 
					icon={this.props.icon}			
				/>
				<p>{this.props.city}</p>
				<p>{this.props.description}</p>
				<p>Low: {this.props.min}&deg; F</p>
				<p>High: {this.props.max}&deg; F</p>
				<p>Humidity: {this.props.humidity}</p>
			</div>
		)
	}
});

module.exports = Weather;