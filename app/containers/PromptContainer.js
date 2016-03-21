var React = require('react');
var Prompt = require('../components/Prompt');
var styles = require('../styles');

var PromptContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			city: ''
		}
	},
	handleUpdateCity: function(e) {
		this.setState({
			city: e.target.value
		})
	},
	handleSubmitCity: function(e) {
		e.preventDefault();
		var city = this.state.city;
		this.setState({
			city: ''
		});

		if (this.props.routeParams.city) {
			this.context.router.push({
				pathname: '/weather',
				query: {
					city: this.props.routeParams.city,
					day: this.state.day
				}
			});
		} else {
			this.context.router.push('/forecast/' + this.state.city);
		}
	},
	render: function() {
		return (
			<Prompt 
				header="Enter city and state"
				onUpdateCity={this.handleUpdateCity}
				onSubmitCity={this.handleSubmitCity}
				city={this.state.city}
			/>
		)
	}
});

module.exports = PromptContainer;