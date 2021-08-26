import { all } from "redux-saga/effects";
import {
  watchDeleteProduct,
  watchEditProduct,
  watchReadProduct,
} from "./productInformationSaga";
import { watchAddProduct, watchReadProducts } from "./productListSaga";
import { watchReadSales } from "./salesFiguresSaga";
import { watchSubmitOrder } from "./shoppingCartSaga";

export default function* rootSaga() {
  yield all([
    watchReadProducts(),
    watchAddProduct(),
    watchReadProduct(),
    watchEditProduct(),
    watchDeleteProduct(),
    watchSubmitOrder(),
    watchReadSales(),
  ]);
}
