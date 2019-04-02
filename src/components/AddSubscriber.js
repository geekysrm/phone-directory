import React, { Component } from "react";
import { connect } from "react-redux";

import { addSubscriber } from "../actions/subscriberActions";

class AddSubscriber extends Component {
	state = {
		name: "",
		phone: null
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addSubscriber(this.state.name, this.state.phone);
		this.setState({ name: "", phone: null });
		this.props.history.push("/");
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div className="container w-50">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>Name</label>
						<input
							type="text"
							name="name"
							onChange={this.onChange}
							className="form-control"
							aria-describedby="emailHelp"
							placeholder="Enter your name"
						/>
					</div>
					<div className="form-group">
						<label>Phone Number</label>
						<input
							type="number"
							name="phone"
							onChange={this.onChange}
							className="form-control"
							placeholder="Enter your phone no."
						/>
					</div>
					<button type="submit" className="btn btn-success">
						ADD
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	columns: state.columns
});

export default connect(
	mapStateToProps,
	{ addSubscriber }
)(AddSubscriber);
