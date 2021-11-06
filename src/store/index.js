import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import itemsReducer from "./products";
import cartReducer from "./cart";

const reducers = combineReducers({
  cart: cartReducer,
  items: itemsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
