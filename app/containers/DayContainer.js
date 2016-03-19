var React = require('react');
var Day = require('../components/Day');
var OpenWeatherHelper = require('../helpers/OpenWeatherHelper');

var DayContainer = React.createClass({
	getInitialState: function() {
		return {
			forecast: ''
		}
	},
	componentDidMount: function() {
		var query = this.props.params.pickCity;
		OpenWeatherHelper.getFiveDayForecast(query)
		.then(function(city) {
			this.setState({
				forecast: city.data.list
			})
			console.log(this.state.forecast);
		}.bind(this));
	},
	render: function() {
		return (
			<div>
				<h1>{this.props.header}</h1>
				<Day />
			</div>
		)
	}
});

module.exports = DayContainer;