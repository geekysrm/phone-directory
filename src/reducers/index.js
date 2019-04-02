// Root Reducer
import { combineReducers } from "redux";
import subscriberReducer from "./subscriberReducer";

export default combineReducers({
	subscribers: subscriberReducer
});
