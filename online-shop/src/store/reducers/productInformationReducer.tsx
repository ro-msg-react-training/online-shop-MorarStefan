import ProductDetail from "../../interfaces/ProductDetail";
import RequestError from "../../interfaces/RequestError";
import { ProductInformationState } from "../../interfaces/states/ProductInformationState";
import {
  READ_PRODUCT_REQUEST,
  READ_PRODUCT_SUCCESS,
  READ_PRODUCT_ERROR,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
} from "../actions/productInformationActions";

const emptyProduct: ProductDetail = {
  _id: "",
  name: "",
  description: "",
  category: {
    name: "",
    description: "",
  },
  supplier: {
    name: "",
  },
  price: 0,
  weight: 0,
  imageUrl: "",
};

const initialState: ProductInformationState = {
  product: emptyProduct,
  loading: false,
  error: null,
};

export default function productInformationReducer(
  state = initialState,
  action: {
    type: string;
    payload: { product?: ProductDetail; error?: RequestError; id?: string };
  }
) {
  switch (action.type) {
    case READ_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case READ_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload.product,
      };

    case READ_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case EDIT_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload.product,
      };

    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: emptyProduct,
      };

    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
