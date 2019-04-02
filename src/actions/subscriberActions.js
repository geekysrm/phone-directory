import { ADD_SUBSCRIBER, DELETE_SUBSCRIBER } from "./types";

export const addSubscriber = (name, phone) => {
	return {
		type: ADD_SUBSCRIBER,
		payload: {
			name,
			phone
		}
	};
};

export const deleteSubscriber = index => {
	return {
		type: DELETE_SUBSCRIBER,
		payload: {
			index
		}
	};
};
