import { ADD_SUBSCRIBER } from "../actions/types";

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
    default:
      return state;
  }
}
