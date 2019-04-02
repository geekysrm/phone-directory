import React, { Component } from "react";
import { connect } from "react-redux";
import IntlTelInput from "react-bootstrap-intl-tel-input";
import phone from "phone";

import { addSubscriber } from "../actions/subscriberActions";

class AddSubscriber extends Component {
	state = {
		name: "",
		phone: "",
		submitted: false,
		error: ""
	};

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ submitted: true });

		if (!this.state.name) this.setState({ error: "Please enter name" });
		else if (!this.state.phone)
			this.setState({ error: "Please enter valid phone number" });
		else {
			this.props.addSubscriber(this.state.name, this.state.phone);
			this.setState({ name: "", phone: "" });
			this.props.history.push("/");
		}
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onPhoneChange = data => {
		this.setState({ phone: phone(data.intlPhoneNumber)[0] });
	};

	render() {
		return (
			<div className="container w-50">
				<form onSubmit={this.handleSubmit}>
					{this.state.error && (
						<div className="alert alert-danger" role="alert">
							{this.state.error}
						</div>
					)}
					<div className="form-group">
						<label>Name</label>
						<input
							type="text"
							name="name"
							onChange={this.onChange}
							className={`form-control ${!this.state.name && "is-invalid"}`}
							aria-describedby="emailHelp"
							placeholder="Enter name"
						/>
					</div>
					<div className="form-group">
						<label>Phone Number</label>
						<IntlTelInput
							preferredCountries={["IN"]}
							defaultCountry={"IN"}
							onChange={data => this.onPhoneChange(data)}
							value={this.state.phone}
							inputClassName={!this.state.phone && " is-invalid"}
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
