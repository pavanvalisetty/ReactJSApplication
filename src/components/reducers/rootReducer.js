import { combineReducers, createStore } from "redux";

import {
  theDefaultReducer,
  firstNamedReducer,
  secondNamedReducer,
  reducer,
} from "./allreducers";
import cardReducer from "./cartReducer";

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  theDefaultReducer,
  firstNamedReducer,
  secondNamedReducer,
  reducer,
  cardReducer,
});

const store = createStore(rootReducer);
console.log(store.getState());
// {theDefaultReducer : 0, firstNamedReducer : 1, secondNamedReducer : 2}
export default store;
