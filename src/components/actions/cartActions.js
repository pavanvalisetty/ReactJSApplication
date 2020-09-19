import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  DATA_LOADED,
  PRODUCT_LOAD,
} from "./action-types/cart-actions";

//add cart action
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};
//remove item action
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
//subtract qt action
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
//add qt action
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
export const addShipping = (id) => {
  return {
    type: ADD_SHIPPING,
    id,
  };
};
export function dataLoaded(items) {
  //console.log("dataLoaded action");
  return {
    type: DATA_LOADED,
    items: items,
  };
}
export function productLoad(selectedItem) {
  console.log("dataLoaded action");
  return {
    type: PRODUCT_LOAD,
    selectedItem: selectedItem,
  };
}
