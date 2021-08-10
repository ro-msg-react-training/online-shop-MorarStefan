import Product from "../../interfaces/Product";

import {
  READ_PRODUCTS,
  READ_PRODUCTS_SUCCESS,
  READ_PRODUCTS_ERROR,
} from "../actions/productActions";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export default function productReducer(
  state = initialState,
  action: { type: string; payload: { products: Array<Product>; error: Error } }
) {
  switch (action.type) {
    case READ_PRODUCTS:
      return {
        ...state,
        loading: true,
      };

    case READ_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };

    case READ_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        products: [],
      };

    default:
      return state;
  }
}
