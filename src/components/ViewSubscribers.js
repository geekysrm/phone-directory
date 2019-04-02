import React, { Component } from "react";
import { connect } from "react-redux";

import "./ViewSubscribers.css";

class ViewSubscribers extends Component {
	handleClick = () => {
		this.props.history.push("/add");
	};

	renderList = () => {};

	render() {
		const { allSubscribers } = this.props.subscribers;
		console.log(this.props.subscribers.allSubscribers);
		return (
			<div>
				<h1>Phone Directory</h1>
				<button className="btn btn-success" onClick={this.handleClick}>
					ADD
				</button>
				<div className="table-responsive">
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
							{allSubscribers.length > 0
								? allSubscribers.map((subscriber, index) => {
										return (
											<tr key={index}>
												<th scope="row">{Number(index) + 1}</th>
												<td className="my-auto">{subscriber.name}</td>
												<td>{subscriber.phone}</td>
												<td>
													<button className="btn btn-danger">DELETE</button>
												</td>
											</tr>
										);
								  })
								: null}
						</tbody>
					</table>
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
	{}
)(ViewSubscribers);
