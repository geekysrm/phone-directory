import React, { Component } from "react";
import { connect } from "react-redux";
import IntlTelInput from "react-bootstrap-intl-tel-input";
import phone from "phone";
import { Link } from "react-router-dom";

import { addSubscriber } from "../actions/subscriberActions";
import "./AddSubscriber.css";

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
			this.setState({ name: "", phone: "", error: "" });
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
			<div className="container w-100">
				<Link to="/" className="btn btn-secondary w-100">
					BACK
				</Link>
				<hr />
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
							placeholder="Enter name"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<IntlTelInput
							preferredCountries={["IN"]}
							defaultCountry={"IN"}
							onChange={data => this.onPhoneChange(data)}
							value={this.state.phone}
							inputClassName={!this.state.phone && " is-invalid"}
						/>
					</div>
					<button type="submit" className="btn btn-success w-100">
						ADD
					</button>
				</form>
				<hr />
				<div className="subscriber-wrapper">
					<h2>Subscriber to be added</h2>
					<p>
						<b>Name:</b> {this.state.name}
					</p>
					<p>
						<b>Phone:</b> {this.state.phone}
					</p>
				</div>
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
