import { combineReducers } from "redux";
import productList from "./productListReducer";
import productInformation from "./productInformationReducer";
import shoppingCart from "./shoppingCartReducer";

const rootReducer = combineReducers({
  productList,
  productInformation,
  shoppingCart,
});

export default rootReducer;
