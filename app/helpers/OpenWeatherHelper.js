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
	getSixteenDayForecast: function(location) {

	}
}

module.exports = helpers;