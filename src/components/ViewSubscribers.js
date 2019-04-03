import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteSubscriber } from "../actions/subscriberActions";
import "./ViewSubscribers.css";

class ViewSubscribers extends Component {
	state = {
		search: ""
	};

	handleDeleteClick = index => {
		this.props.deleteSubscriber(index);
	};

	updateSearch = e => {
		this.setState({
			search: e.target.value
		});
	};

	render() {
		const { allSubscribers } = this.props.subscribers;
		let filteredPeople = allSubscribers.filter(person => {
			let name = person.name.toLowerCase();
			return name.indexOf(this.state.search.toLowerCase()) !== -1;
		});
		return (
			<div className="container">
				<Link to="/add" className="btn btn-success w-100">
					ADD
				</Link>
				<div className="table-responsive">
					{allSubscribers.length > 0 && (
						<div className="search form-group mt-1">
							<input
								type="text"
								className="form-control"
								value={this.state.search}
								onChange={this.updateSearch}
								placeholder="Search name"
							/>
							<img
								className="search-icon"
								alt="search-icon"
								src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png"
							/>
						</div>
					)}
					{filteredPeople.length > 0 ? (
						filteredPeople.map((subscriber, index) => {
							return (
								<>
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
								</>
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
