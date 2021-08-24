import { call, put, takeLatest } from "redux-saga/effects";
import Order from "../../interfaces/Order";
import { createOrder } from "../../services/orderService";
import {
  submitOrderError,
  submitOrderSuccess,
  SUBMIT_ORDER_REQUEST,
} from "../actions/shoppingCartActions";

export function* watchSubmitOrder() {
  yield takeLatest(SUBMIT_ORDER_REQUEST, submitOrder);
}

function* submitOrder(action: { type: string; payload: { order: Order } }) {
  try {
    yield call(createOrder, action.payload.order);
    yield put(submitOrderSuccess());
  } catch (error) {
    yield put(submitOrderError(error));
  }
}
