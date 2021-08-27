import Product from "../Product";
import RequestError from "../RequestError";

export interface ProductListState {
  products: Array<Product>;
  loading: boolean;
  error: RequestError | null;
}
