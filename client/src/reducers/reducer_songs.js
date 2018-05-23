import { FETCH_SONGS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SONGS:
      return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}