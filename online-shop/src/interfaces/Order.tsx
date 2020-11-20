import OrderProduct from "./OrderProduct";

export default interface Order {
  createdAt: string;
  customerId: string;
  deliveryAddressId: string;
  products: Array<OrderProduct>;
}
