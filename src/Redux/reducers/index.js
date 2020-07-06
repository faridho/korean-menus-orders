import { AUTHENTICATION } from "../constants/action-types";
import { combineReducers } from "redux";

function user(state = [], action) {
    switch (action.type) {
        case AUTHENTICATION:
            return [
              ...state,
              { id: action.id, email: action.email }
            ]
        default:
            return state
    }
}

const Reducers = combineReducers({
    user
  });
  
export default Reducers;
