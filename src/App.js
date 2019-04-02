import React, { Component } from "react";

import FirstComponent from "./components/FirstComponent";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<FirstComponent />
			</div>
		);
	}
}

export default App;
