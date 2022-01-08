import * as types from "../actionTypes";

export const searchMealAction = (searchLetter) => ({
  type: types.GET_MEALS_REQUEST,
  searchLetter
});
