import Order from "../../interfaces/Order";
import ShoppingCart from "../../interfaces/ShoppingCart";
import { createOrder } from "../../services/orderService";

export const SUBMIT_ORDER_REQUEST = "SUBMIT_ORDER_REQUEST";
export const SUBMIT_ORDER_SUCCESS = "SUBMIT_ORDER_SUCCESS";
export const SUBMIT_ORDER_ERROR = "SUBMIT_ORDER_ERROR";
export const ADD_ITEM = "ADD_ITEM";

export const submitOrderRequest = () => {
  return {
    type: SUBMIT_ORDER_REQUEST,
  };
};

export const submitOrderSuccess = () => {
  return {
    type: SUBMIT_ORDER_SUCCESS,
  };
};

export const submitOrderError = (error: Error) => {
  return {
    type: SUBMIT_ORDER_ERROR,
    payload: { error: error },
  };
};

export const submitOrder = (order: Order) => {
  return async (dispatch: any) => {
    dispatch(submitOrderRequest());
    try {
      createOrder(order);
      dispatch(submitOrderSuccess());
    } catch (error) {
      dispatch(submitOrderError(error));
    }
  };
};

export const addItem = (item: ShoppingCart) => {
  return {
    type: ADD_ITEM,
    payload: { item: item },
  };
};
