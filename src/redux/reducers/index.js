import mealsReducer from "./meals";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  meals: mealsReducer
});

export const mapStateToProps = (state) => {
  return {
    meals: state.meals
  };
};
