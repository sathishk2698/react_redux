import { fork, all } from "redux-saga/effects";
import * as mealsSaga from "./meals";

export default function* () {
  yield all([fork(mealsSaga.watchGetMeals)]);
}
