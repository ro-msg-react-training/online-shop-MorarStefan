import Product from "../../interfaces/Product";
import ProductDetail from "../../interfaces/ProductDetail";

export const READ_PRODUCT_REQUEST = "READ_PRODUCT_REQUEST";
export const READ_PRODUCT_SUCCESS = "READ_PRODUCT_SUCCESS";
export const READ_PRODUCT_ERROR = "READ_PRODUCT_ERROR";

export const EDIT_PRODUCT_REQUEST = "EDIT_PRODUCT_REQUEST";
export const EDIT_PRODUCT_SUCCESS = "EDIT_PRODUCT_SUCCESS";
export const EDIT_PRODUCT_ERROR = "EDIT_PRODUCT_ERROR";

export const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_ERROR = "DELETE_PRODUCT_ERROR";

export const readProduct = (id: string) => {
  return {
    type: READ_PRODUCT_REQUEST,
    payload: { id: id },
  };
};

export const readProductSuccess = (product: Product) => {
  return {
    type: READ_PRODUCT_SUCCESS,
    payload: { product: product },
  };
};

export const readProductError = (error: Error) => {
  return {
    type: READ_PRODUCT_ERROR,
    payload: { error: error },
  };
};

export const editProduct = (product: ProductDetail) => {
  return {
    type: EDIT_PRODUCT_REQUEST,
    payload: { product: product },
  };
};

export const editProductSuccess = (product: ProductDetail) => {
  return {
    type: EDIT_PRODUCT_SUCCESS,
    payload: { product: product },
  };
};

export const editProductError = (error: Error) => {
  return {
    type: EDIT_PRODUCT_ERROR,
    payload: { error: error },
  };
};

export const deleteProduct = (id: string) => {
  return {
    type: DELETE_PRODUCT_REQUEST,
    payload: { id: id },
  };
};

export const deleteProductSuccess = () => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
  };
};

export const deleteProductError = (error: Error) => {
  return {
    type: DELETE_PRODUCT_ERROR,
    payload: { error: error },
  };
};
