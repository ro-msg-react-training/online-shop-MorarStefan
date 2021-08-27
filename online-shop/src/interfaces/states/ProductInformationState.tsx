import ProductDetail from "../ProductDetail";
import RequestError from "../RequestError";

export interface ProductInformationState {
  product: ProductDetail;
  loading: boolean;
  error: RequestError | null;
}
