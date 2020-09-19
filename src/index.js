import React from "react";
import ReactDOM from "react-dom";
import Routing from "./App";
import "./index.css";
import cartReducer from "./components/reducers/cartReducer";
import combineReducers from "../src/components/reducers/index";

import { Provider } from "react-redux";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
const middleware = [thunk];
//import store from "./store";

const store = createStore(
  cartReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById("root")
);
