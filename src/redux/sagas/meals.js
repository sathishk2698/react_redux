import { takeEvery, call, put } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import axios from "axios";

export function* watchGetMeals() {
  yield takeEvery(types.GET_MEALS_REQUEST, workerGetMealsByLetter);
}

export function* workerGetMealsByLetter(action) {
  yield call(fetchMealsByLetter, action);
}

export function* fetchMealsByLetter(obj) {
  try {
    const response = yield call(axios.get, `https://www.themealdb.com/api/json/v1/1/search.php?f=${obj.searchLetter}`);
    yield put({
      type: types.GET_MEALS_SUCCESS,
      result: response.data.meals
    });
  } catch (error) {
    yield put({
      type: types.GET_MEALS_FAILED,
      result: error.toString()
    });
  }
}
