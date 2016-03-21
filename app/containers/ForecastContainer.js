var React = require('react');
var Forecast = require('../components/Forecast');
var OpenWeatherHelper = require('../helpers/OpenWeatherHelper');
var styles = require('../styles');

var ForecastContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			forecast: ''
		}
	},
	compileDayData: function() {
		var dayArr = [];
		for (var i=0; i < this.state.forecast.length; i++) {
			dayArr.push(<Forecast 
							date={OpenWeatherHelper.convertEpochToRegular(this.state.forecast[i].dt)} 
							key={i}
							forecastKey={i}
							icon={this.state.forecast[i].weather[0].icon}
							onForecastClick={this.handleForecastClick}
							/>);
		}
		return dayArr;
	},
	componentDidMount: function() {
		var query = this.props.params.pickCity;
		OpenWeatherHelper.getFiveDayForecast(query)
		.then(function(city) {
			this.setState({
				forecast: city.data.list
			})
		}.bind(this));
	},
	handleForecastClick: function(key) {
		this.context.router.push({
			pathname: '/weather',
			forecastKey: key,
			state: {
				weather: this.state.forecast[key],
				city: this.props.params.pickCity
			}
		});
	},
	render: function() {
		var dayArray = this.compileDayData();
		return (
			<div className="text-center">
				<h1>{this.props.params.pickCity}</h1>
				<h3>Select a day</h3>
				<div style={styles.flexContainer}>
					{dayArray}
				</div>
			</div>
		)
	}
});

module.exports = ForecastContainer;