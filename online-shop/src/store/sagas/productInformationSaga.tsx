import { call, put, takeLatest } from "redux-saga/effects";
import ProductDetail from "../../interfaces/ProductDetail";
import Product from "../../interfaces/ProductDetail";
import {
  getProduct,
  removeProduct,
  updateProduct,
} from "../../services/productService";
import {
  deleteProductError,
  deleteProductSuccess,
  DELETE_PRODUCT_REQUEST,
  editProductError,
  editProductSuccess,
  EDIT_PRODUCT_REQUEST,
  readProductError,
  readProductSuccess,
  READ_PRODUCT_REQUEST,
} from "../actions/productInformationActions";

export function* watchReadProduct() {
  yield takeLatest(READ_PRODUCT_REQUEST, readProduct);
}

export function* watchEditProduct() {
  yield takeLatest(EDIT_PRODUCT_REQUEST, editProduct);
}

export function* watchDeleteProduct() {
  yield takeLatest(DELETE_PRODUCT_REQUEST, deleteProduct);
}

function* readProduct(action: { type: string; payload: { id: string } }) {
  try {
    const product: Product = yield call(getProduct, action.payload.id);
    yield put(readProductSuccess(product));
  } catch (error) {
    yield put(readProductError(error));
  }
}

function* editProduct(action: {
  type: string;
  payload: { product: ProductDetail };
}) {
  try {
    const updatedProduct: ProductDetail = yield call(
      updateProduct,
      action.payload.product
    );
    yield put(editProductSuccess(updatedProduct));
  } catch (error) {
    yield put(editProductError(error));
  }
}

function* deleteProduct(action: { type: string; payload: { id: string } }) {
  try {
    yield call(removeProduct, action.payload.id);
    yield put(deleteProductSuccess());
  } catch (error) {
    yield put(deleteProductError(error));
  }
}
