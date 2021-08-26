import { combineReducers } from "redux";
import productList from "./productListReducer";
import productInformation from "./productInformationReducer";
import shoppingCart from "./shoppingCartReducer";
import salesFigures from "./salesFiguresReducer";

const rootReducer = combineReducers({
  productList,
  productInformation,
  shoppingCart,
  salesFigures,
});

export default rootReducer;
