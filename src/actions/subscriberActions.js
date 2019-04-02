import { ADD_SUBSCRIBER } from "./types";

export const addSubscriber = (name, phone) => {
	return {
		type: ADD_SUBSCRIBER,
		payload: {
			name,
			phone
		}
	};
};
