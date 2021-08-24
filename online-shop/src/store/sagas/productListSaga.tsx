import { call, put, takeEvery } from "redux-saga/effects";
import PostProductDetail from "../../interfaces/PostProductDetail";
import Product from "../../interfaces/Product";
import ProductDetail from "../../interfaces/ProductDetail";
import { createProduct, getProducts } from "../../services/productService";
import {
  addProductError,
  addProductSuccess,
  ADD_PRODUCT_REQUEST,
  readProductsError,
  readProductsSuccess,
  READ_PRODUCTS_REQUEST,
} from "../actions/productListActions";

export function* watchReadProducts() {
  yield takeEvery(READ_PRODUCTS_REQUEST, readProducts);
}

export function* watchAddProduct() {
  yield takeEvery(ADD_PRODUCT_REQUEST, addProduct);
}

function* readProducts() {
  try {
    const products: Array<Product> = yield call(getProducts);
    yield put(readProductsSuccess(products));
  } catch (error) {
    yield put(readProductsError(error));
  }
}

function* addProduct(action: {
  type: string;
  payload: { product: PostProductDetail };
}) {
  try {
    const createdProduct: ProductDetail = yield call(
      createProduct,
      action.payload.product
    );
    yield put(addProductSuccess(createdProduct));
  } catch (error) {
    yield put(addProductError(error));
  }
}
