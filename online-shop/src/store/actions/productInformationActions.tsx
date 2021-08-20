import Product from "../../interfaces/Product";
import ProductDetail from "../../interfaces/ProductDetail";
import {
  getProduct,
  removeProduct,
  updateProduct,
} from "../../services/productService";

export const READ_PRODUCT_REQUEST = "READ_PRODUCT_REQUEST";
export const READ_PRODUCT_SUCCESS = "READ_PRODUCT_SUCCESS";
export const READ_PRODUCT_ERROR = "READ_PRODUCT_ERROR";

export const EDIT_PRODUCT_REQUEST = "EDIT_PRODUCT_REQUEST";
export const EDIT_PRODUCT_SUCCESS = "EDIT_PRODUCT_SUCCESS";
export const EDIT_PRODUCT_ERROR = "EDIT_PRODUCT_ERROR";

export const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_ERROR = "DELETE_PRODUCT_ERROR";

export const readProductRequest = () => {
  return {
    type: READ_PRODUCT_REQUEST,
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

export const readProduct = (id: string) => {
  return async (dispatch: any) => {
    dispatch(readProductRequest());
    try {
      const product = await getProduct(id);
      dispatch(readProductSuccess(product));
    } catch (error) {
      dispatch(readProductError(error));
    }
  };
};

export const editProductRequest = () => {
  return {
    type: EDIT_PRODUCT_REQUEST,
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

export const editProduct = (product: ProductDetail) => {
  return async (dispatch: any) => {
    dispatch(editProductRequest());
    try {
      const updatedProduct = await updateProduct(product);
      dispatch(editProductSuccess(updatedProduct));
    } catch (error) {
      dispatch(editProductError(error));
    }
  };
};

export const deleteProductRequest = () => {
  return {
    type: DELETE_PRODUCT_REQUEST,
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

export const deleteProduct = (id: string) => {
  return async (dispatch: any) => {
    dispatch(deleteProductRequest());
    try {
      await removeProduct(id);
      dispatch(deleteProductSuccess());
    } catch (error) {
      dispatch(deleteProductError(error));
    }
  };
};
