import { legacy_createStore, combineReducers } from "redux";
import data from "../assets/data";

export const addToCart = (options, quantity, id) => {
  return {
    type: "addToCart",
    payload: { options, quantity, id },
  };
};

export const removeFromCart = (id) => {
  return {
    type: "removeFromCart",
    payload: id,
  };
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];
    case "removeFromCart":
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};

const menuReducer = (state = data.menu) => {
  return state;
};

const rootReducer = combineReducers({ cartReducer, menuReducer });

export const store = legacy_createStore(rootReducer);
