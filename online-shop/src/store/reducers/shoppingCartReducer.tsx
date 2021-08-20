import Error from "../../interfaces/Error";
import ShoppingCart from "../../interfaces/ShoppingCart";
import {
  ADD_ITEM,
  SUBMIT_ORDER_ERROR,
  SUBMIT_ORDER_REQUEST,
  SUBMIT_ORDER_SUCCESS,
} from "../actions/shoppingCartActions";

const initialState: {
  shoppingCart: ShoppingCart[];
  loading: boolean;
  error: Error;
} = {
  shoppingCart: [],
  loading: false,
  error: { message: "" },
};

export default function shoppingCartReducer(
  state = initialState,
  action: {
    type: string;
    payload: { item: ShoppingCart; error: Error };
  }
) {
  switch (action.type) {
    case SUBMIT_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SUBMIT_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        shoppingCart: [],
      };

    case SUBMIT_ORDER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case ADD_ITEM:
      let isNewItem = true;
      for (const iterator of state.shoppingCart) {
        if (iterator.productId === action.payload.item.productId) {
          iterator.quantity += action.payload.item.quantity;
          isNewItem = false;
          break;
        }
      }
      return {
        ...state,
        shoppingCart: isNewItem
          ? [...state.shoppingCart, action.payload.item]
          : state.shoppingCart,
      };

    default:
      return state;
  }
}
