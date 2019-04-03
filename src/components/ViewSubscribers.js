import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteSubscriber } from "../actions/subscriberActions";
import "./ViewSubscribers.css";

class ViewSubscribers extends Component {
	handleDeleteClick = index => {
		this.props.deleteSubscriber(index);
	};

	render() {
		const { allSubscribers } = this.props.subscribers;
		return (
			<div className="container">
				<Link to="/add" className="btn btn-success w-100">
					ADD
				</Link>
				<div className="table-responsive">
					{allSubscribers.length > 0 ? (
						allSubscribers.map((subscriber, index) => {
							return (
								<table className="table table-striped table-borderless">
									<thead>
										<tr>
											<th>#</th>
											<th>NAME</th>
											<th>PHONE</th>
											<th />
										</tr>
									</thead>
									<tbody>
										<tr key={index}>
											<th scope="row">{Number(index) + 1}</th>
											<td className="my-auto">{subscriber.name}</td>
											<td>{subscriber.phone}</td>
											<td>
												<button
													className="btn btn-danger"
													onClick={() => this.handleDeleteClick(index)}
												>
													DELETE
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							);
						})
					) : (
						<div className="jumbotron jumbotron-fluid mt-3">
							<div className="container">
								<h2 className="text-center">You have no subscribers to show</h2>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		subscribers: state.subscribers
	};
};

export default connect(
	mapStateToProps,
	{ deleteSubscriber }
)(ViewSubscribers);
