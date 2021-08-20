import { combineReducers } from "redux";
import productList from "./productListReducer";
import productInformation from "./productInformationReducer";

const rootReducer = combineReducers({
  productList,
  productInformation,
});

export default rootReducer;
