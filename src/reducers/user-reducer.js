import { UPDATE_USER } from "../actions/user-actions";
import { UPDATE_USER2 } from "../actions/user-actions";

export default function userReducer(state = "", { type, payload }) {
  switch (type) {
    case UPDATE_USER:
      return payload.user;
    case UPDATE_USER2:
      return payload.user;
    default:
      return state;
  }
}
