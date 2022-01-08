import * as actionTypes from "../actions/actionTypes";
import { combineReducers } from "redux";

const mealsReducer = (state = { result: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_MEALS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_MEALS_SUCCESS:
      sessionStorage.setItem("mealsData", JSON.stringify(action.result));
      return { ...state, result: action.result, loading: false };
    case actionTypes.GET_MEALS_FAILED:
      return { ...state, result: action.result, loading: false };
    default:
      return state;
  }
};

export default combineReducers({
  mealsReducer
});
