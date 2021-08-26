import { call, put, takeEvery } from "redux-saga/effects";
import CategorySale from "../../interfaces/CategorySale";
import { getSales } from "../../services/saleService";
import {
  readSalesError,
  readSalesSuccess,
  READ_SALES_REQUEST,
} from "../actions/salesFiguresActions";

export function* watchReadSales() {
  yield takeEvery(READ_SALES_REQUEST, readSales);
}

function* readSales() {
  try {
    const sales: Array<CategorySale> = yield call(getSales);
    yield put(readSalesSuccess(sales));
  } catch (error) {
    yield put(readSalesError(error));
  }
}
