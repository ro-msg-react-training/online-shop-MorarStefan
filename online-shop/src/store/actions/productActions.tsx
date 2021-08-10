import Product from "../../interfaces/Product";
import Error from "../../interfaces/Error";
import { getProducts } from "../../services/productService";

export const READ_PRODUCTS = "READ_PRODUCTS";
export const READ_PRODUCTS_SUCCESS = "READ_PRODUCTS_SUCCESS";
export const READ_PRODUCTS_ERROR = "READ_PRODUCTS_ERROR";

export const readProductsRequest = () => {
  return {
    type: READ_PRODUCTS,
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

export const readProducts = () => {
  return async (dispatch: any) => {
    dispatch(readProductsRequest());
    try {
      const products = await getProducts();
      dispatch(readProductsSuccess(products));
    } catch (error) {
      dispatch(readProductsError(error));
    }
  };
};
