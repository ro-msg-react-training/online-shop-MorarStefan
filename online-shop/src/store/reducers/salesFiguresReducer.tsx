import CategorySale from "../../interfaces/CategorySale";
import {
  READ_SALES_ERROR,
  READ_SALES_REQUEST,
  READ_SALES_SUCCESS,
} from "../actions/salesFiguresActions";

const initialState = {
  sales: [],
  loading: false,
  error: null,
};

export default function salesFiguresReducer(
  state = initialState,
  action: {
    type: string;
    payload: { sales: Array<CategorySale>; error: Error };
  }
) {
  switch (action.type) {
    case READ_SALES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case READ_SALES_SUCCESS:
      return {
        ...state,
        loading: false,
        sales: action.payload.sales,
      };

    case READ_SALES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        sales: [],
      };
    default:
      return state;
  }
}
