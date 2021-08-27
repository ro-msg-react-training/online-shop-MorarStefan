import Order from "../../interfaces/Order";
import RequestError from "../../interfaces/RequestError";
import ShoppingCart from "../../interfaces/ShoppingCart";

export const SUBMIT_ORDER_REQUEST = "SUBMIT_ORDER_REQUEST";
export const SUBMIT_ORDER_SUCCESS = "SUBMIT_ORDER_SUCCESS";
export const SUBMIT_ORDER_ERROR = "SUBMIT_ORDER_ERROR";
export const ADD_ITEM = "ADD_ITEM";

export const submitOrder = (order: Order) => {
  return {
    type: SUBMIT_ORDER_REQUEST,
    payload: { order: order },
  };
};

export const submitOrderSuccess = () => {
  return {
    type: SUBMIT_ORDER_SUCCESS,
  };
};

export const submitOrderError = (error: RequestError) => {
  return {
    type: SUBMIT_ORDER_ERROR,
    payload: { error: error },
  };
};

export const addItem = (item: ShoppingCart) => {
  return {
    type: ADD_ITEM,
    payload: { item: item },
  };
};
