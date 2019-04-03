import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AddSubscriber from "./components/AddSubscriber";
import ViewSubscribers from "./components/ViewSubscribers";

import "./App.css";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Header />
						<Route exact path="/" component={ViewSubscribers} />
						<Route exact path="/add" component={AddSubscriber} />
						<Footer />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
