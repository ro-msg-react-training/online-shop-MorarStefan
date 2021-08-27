import React, { useState } from "react";
import "../styles/styles.scss";
import ShoppingCart from "../interfaces/ShoppingCart";
import OrderProduct from "../interfaces/OrderProduct";
import Order from "../interfaces/Order";
import { DEFAULT_CUSTOMER_ID, DEFAULT_DELIVERY_ADDRESS_ID } from "../constants";
import { submitOrder } from "../store/actions/shoppingCartActions";
import { useAppDispatch, useAppSelector } from "../store";
import { ShoppingCartState } from "../interfaces/states/ShoppingCartState";

function prepareOrder(shoppingCart: Array<ShoppingCart>) {
  const orderProducts: Array<OrderProduct> = [];
  for (const iterator of shoppingCart) {
    orderProducts.push({
      productId: iterator.productId,
      quantity: iterator.quantity,
    });
  }
  const order: Order = {
    createdAt: new Date().toString(),
    customerId: DEFAULT_CUSTOMER_ID,
    deliveryAddressId: DEFAULT_DELIVERY_ADDRESS_ID,
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

function OrderNotification(props: { setButton: Function }) {
  return (
    <div className="notification is-success has-text-weight-bold">
      <button
        className="delete"
        onClick={() => props.setButton(false)}
      ></button>
      The order was created!
    </div>
  );
}

function ShoppingCartListing() {
  const [createOrderButton, setCreateOrderButton] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const orderInformation: ShoppingCartState = useAppSelector(
    (state) => state.shoppingCart
  );

  const listItems = orderInformation.shoppingCart.map((item: ShoppingCart) => (
    <ListItem key={item.productId} value={item} />
  ));

  let notification;
  if (!createOrderButton) {
    notification = "";
  } else {
    notification = <OrderNotification setButton={setCreateOrderButton} />;
  }

  return (
    <div>
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
        <button
          className="button is-primary has-text-weight-bold m-5"
          onClick={() => {
            const order: Order = prepareOrder(orderInformation.shoppingCart);
            setCreateOrderButton(true);
            dispatch(submitOrder(order));
          }}
        >
          Checkout
        </button>
      </div>
      <div className="Notification">{notification}</div>
    </div>
  );
}

export default ShoppingCartListing;
