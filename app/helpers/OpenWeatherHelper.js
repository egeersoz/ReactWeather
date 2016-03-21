var axios = require('axios');
var Secrets = require('./Secrets');

var appid = Secrets.openWeatherApiKey;

var helpers = {
	getFiveDayForecast: function(location) {
		var stripped = location.replace(/ /g,'');
		return axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + stripped + "&cnt=5&mode=json&APPID=" + appid)
			.then(function(forecast) {
				return forecast;
			}).catch(function(err) {
				console.warn("An error occurred: " + err);
			})
	},
	convertEpochToRegular: function(seconds) {
		var d = new Date(0);
		d.setUTCSeconds(seconds);
		return d.toDateString();
	},
	convertKToF: function(kelvinDegrees) {
		var kelvin = parseInt(kelvinDegrees);
		var fahrenheit = (kelvinDegrees) * 1.8 - 459.67;
		return Math.ceil(fahrenheit);
	},
	capitalizeDescription: function(string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}
}

module.exports = helpers;