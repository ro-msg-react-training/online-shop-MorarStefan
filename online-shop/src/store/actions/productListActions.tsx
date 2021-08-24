import Product from "../../interfaces/Product";
import Error from "../../interfaces/Error";
import PostProductDetail from "../../interfaces/PostProductDetail";

export const READ_PRODUCTS_REQUEST = "READ_PRODUCTS_REQUEST";
export const READ_PRODUCTS_SUCCESS = "READ_PRODUCTS_SUCCESS";
export const READ_PRODUCTS_ERROR = "READ_PRODUCTS_ERROR";

export const ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_ERROR = "ADD_PRODUCT_ERROR";

export const readProducts = () => {
  return {
    type: READ_PRODUCTS_REQUEST,
  };
};

export const readProductsSuccess = (products: Array<Product>) => {
  return {
    type: READ_PRODUCTS_SUCCESS,
    payload: { products: products },
  };
};

export const readProductsError = (error: Error) => {
  return {
    type: READ_PRODUCTS_ERROR,
    payload: { error: error },
  };
};

export const addProduct = (product: PostProductDetail) => {
  return {
    type: ADD_PRODUCT_REQUEST,
    payload: { product: product },
  };
};

export const addProductSuccess = (product: Product) => {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload: { product: product },
  };
};

export const addProductError = (error: Error) => {
  return {
    type: ADD_PRODUCT_ERROR,
    payload: { error: error },
  };
};
