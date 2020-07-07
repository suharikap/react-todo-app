import { applyMiddleware, createStore } from "redux";
import reducers from "../reducers";
import logger from "redux-logger";
import apiMiddleware from "../middleware/todomiddleware"

function configureStore() {

  const store = createStore(reducers, applyMiddleware(apiMiddleware, logger));
  return store;
}

export default configureStore();
