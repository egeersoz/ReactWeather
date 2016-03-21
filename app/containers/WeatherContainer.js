var React = require('react');
var Weather = require('../components/Weather');
var OpenWeatherHelper = require('../helpers/OpenWeatherHelper');

var WeatherContainer = React.createClass({
	getInitialState: function() {
		return {
			weather: this.props.location.state.weather
		}
	},
	render: function() {
		return (
			<Weather
				city={this.props.location.state.city}
				date={OpenWeatherHelper.convertEpochToRegular(this.state.weather.dt)}
				humidity={this.state.weather.humidity}
				max={OpenWeatherHelper.convertKToF(this.state.weather.temp.max)}
				min={OpenWeatherHelper.convertKToF(this.state.weather.temp.min)}
				description={OpenWeatherHelper.capitalizeDescription(this.state.weather.weather[0].description)}
				icon={this.state.weather.weather[0].icon} 
			/>
		)
	}
});

module.exports = WeatherContainer;