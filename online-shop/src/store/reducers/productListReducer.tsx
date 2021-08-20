import Product from "../../interfaces/Product";

import {
  READ_PRODUCTS_REQUEST,
  READ_PRODUCTS_SUCCESS,
  READ_PRODUCTS_ERROR,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
} from "../actions/productListActions";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export default function productListReducer(
  state = initialState,
  action: {
    type: string;
    payload: { products: Array<Product>; product: Product; error: Error };
  }
) {
  switch (action.type) {
    case READ_PRODUCTS_REQUEST:
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

    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload.product],
      };

    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
