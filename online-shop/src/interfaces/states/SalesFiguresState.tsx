import CategorySale from "../CategorySale";
import RequestError from "../RequestError";

export interface SalesFiguresState {
  sales: Array<CategorySale>;
  loading: boolean;
  error: RequestError | null;
}
