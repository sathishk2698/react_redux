import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import reduxSaga from "redux-saga";
import { rootReducer } from "../reducers";
import rootSaga from "../sagas";

export const getStore = () => {
  const initialState = {};
  const reduxSagaMiddleware = reduxSaga();
  const logger = createLogger();
  const middleWare = [reduxSagaMiddleware, logger];
  const composedEnhancers = compose(applyMiddleware(...middleWare));
  const store = createStore(rootReducer, initialState, composedEnhancers);
  reduxSagaMiddleware.run(rootSaga);
  return store;
};
