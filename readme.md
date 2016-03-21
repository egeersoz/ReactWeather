#Introduction#

This is a small React app that checks the weather forecast in a given city. It's "front-end-only", meaning it has no server. Everything happens inside the browser.

###Getting Started###

Clone the repository to your machine, then do

```sh
> npm install
```

This will install the dependency modules. Then you can do

```sh
> npm start
```

Which will launch `webpack-dev-server` and make the app available under localhost:8080 by default.

###Open Weather API###

The app uses the Open Weather API to get weather forecast data for the specified location. To make the app work in your own environment, you need to create a **Secrets.js** file under `/app/helpers` with the following format:

```javascript
var secrets = {
    openWeatherApiKey: "your Open Weather API key"
}

module.exports = secrets;
```

You can get an API key from [Open Weather](http://openweathermap.org/api). You will need to create an account first if you don't have one. Note that the app does not work without an API key.