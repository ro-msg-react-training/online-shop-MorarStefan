import React from "react";
import "../styles/styles.scss";
import ShoppingCart from "../interfaces/ShoppingCart";
import OrderProduct from "../interfaces/OrderProduct";
import Order from "../interfaces/Order";
import Axios from "axios";
import BACKEND_API from "../constants/index";

function createOrder(shoppingCart: Array<ShoppingCart>) {
  const orderProducts: Array<OrderProduct> = [];
  for (const iterator of shoppingCart) {
    orderProducts.push({
      productId: iterator.productId,
      quantity: iterator.quantity,
    });
  }
  const order: Order = {
    createdAt: (new Date()).toString(),
    customerId: "5f9fcb8e7bdb2732ac6fc10a",
    deliveryAddressId: "5fa0ff2d7c5b6910a84f3ee2",
    products: orderProducts,
  };

  return order;
}

function ListItem(props: { value: ShoppingCart }) {
  const product = props.value;
  return (
    <tr>
      <td>{product.productName}</td>
      <td>{product.categoryName}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
    </tr>
  );
}

function ShoppingCartListing(props: { message: Array<ShoppingCart> }) {
  const shoppingCart: Array<ShoppingCart> = props.message;
  console.log(shoppingCart);
  const listItems = shoppingCart.map((product) => (
    <ListItem key={product.productId} value={product} />
  ));
  return (
    <div className="frame">
      <h1 className="Header is-size-4 m-5 has-text-weight-bold">
        Shopping Cart
      </h1>
      <table className="table is-bordered is-fullwidth">
        <thead>
          <tr>
            <th className="has-text-white">Product</th>
            <th className="has-text-white">Category</th>
            <th className="has-text-white">Price</th>
            <th className="has-text-white">Quantity</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
      <button className="button is-primary has-text-weight-bold m-5"
      onClick={() => {
        const order: Order = createOrder(shoppingCart);
        async function postOrder(order: Order) {
          await Axios.post(BACKEND_API + "orders");
        }
        console.log(order);
        postOrder(order);
      }}>
        Checkout
      </button>
    </div>
  );
}

export default ShoppingCartListing;
