import RequestError from "../RequestError";
import ShoppingCart from "../ShoppingCart";

export interface ShoppingCartState {
  shoppingCart: ShoppingCart[];
  loading: boolean;
  error: RequestError | null;
}
