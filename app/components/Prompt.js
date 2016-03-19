var React = require('react');

var Prompt = React.createClass({
	render: function() {
		return (
			<div className="jumbotron col-md-6 col-md-offset-3 text-center">
				<h1>{this.props.header}</h1>
				<div className="col-md-12">
					<form onSubmit={this.props.onSubmitCity}>
						<div className="form-group">
							<input 
								type="text" 
								className="form-control" 
								placeholder="City, State"
								onChange={this.props.onUpdateCity}
								value={this.props.city} 
							/>
							<button type="submit" className="btn btn-lg btn-success">
								Check weather
							</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
});

module.exports = Prompt;