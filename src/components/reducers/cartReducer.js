import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  DATA_LOADED,
  PRODUCT_LOAD,
} from "../actions/action-types/cart-actions";
import initState from "../../state";

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let addedItem = state.items.find((item) => item.id === action.id);
      //check if the action id exists in the addedItems
      let existed_item = state.addedItems.find((item) => action.id === item.id);
      if (existed_item) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.quantity = 1;
        //calculating the total
        let newTotal = state.total + addedItem.price;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      }
    default:
      return {
        ...state,
        pending: false,
        //items: action.payload,
      };

    case REMOVE_ITEM:
      let itemToRemove = state.addedItems.find((item) => action.id === item.id);
      let new_items = state.addedItems.filter((item) => action.id !== item.id);

      //calculating the total
      let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      console.log(itemToRemove);
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    case ADD_QUANTITY:
      let addedItem1 = state.items.find((item) => item.id === action.id);
      addedItem.quantity += 1;
      let newTotal1 = state.total + addedItem1.price;
      return {
        ...state,
        total: newTotal1,
      };
    case SUB_QUANTITY: {
      let addedItem1 = state.items.find((item) => item.id === action.id);
      //if the qt == 0 then it should be removed
      if (addedItem1.quantity === 1) {
        let new_items = state.addedItems.filter(
          (item) => item.id !== action.id
        );
        let newTotal = state.total - addedItem.price;
        return {
          ...state,
          addedItems: new_items,
          total: newTotal,
        };
      } else {
        addedItem.quantity -= 1;
        let newTotal = state.total - addedItem.price;
        return {
          ...state,
          total: newTotal,
        };
      }
    }
    case ADD_SHIPPING:
      return {
        ...state,
        total: state.total + 6,
      };
    case DATA_LOADED:
      console.log("dataLoaded reducer");
      return Object.assign({}, state, {
        items: action.items,
      });
    case PRODUCT_LOAD:
      console.log("dataLoaded reducer");
      return Object.assign({}, state, {
        selectedItem: action.selectedItem,
      });
  }
};

export default cartReducer;
