import { ADD_SUBSCRIBER, DELETE_SUBSCRIBER } from "../actions/types";

const initialState = {
  allSubscribers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        ...state,
        allSubscribers: [...state.allSubscribers, action.payload]
      };
    case DELETE_SUBSCRIBER:
      return {
        allSubscribers: state.allSubscribers.filter(
          (_, index) => index !== action.payload.index
        )
      };

    default:
      return state;
  }
}
