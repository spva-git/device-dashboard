import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware(),
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
    store = createStore(
      rootReducer,
      composeEnhancer(applyMiddleware(sagaMiddleware))
    );

  sagaMiddleware.run(rootSaga);

  return store;
}
