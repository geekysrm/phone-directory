import React, { Component } from "react";

class ViewSubscribers extends Component {
	handleClick = () => {
		this.props.history.push("/add");
	};
	render() {
		return (
			<div>
				<h1>Phone Directory</h1>
				<button className="btn btn-primary" onClick={this.handleClick}>
					Add
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
							<tr>
								<th scope="row">1</th>
								<td>Mark</td>
								<td>+91-8855447745</td>
								<td>+91-8855447745</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Soumya</td>
								<td>+91-8899889988</td>
								<td>+91-8855447745</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Anish</td>
								<td>+91-9845621320</td>
								<td>+91-8855447745</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
export default ViewSubscribers;
