import React from "react";
import "../styles/styles.scss";
import ShoppingCart from "../interfaces/ShoppingCart";

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
      <h1 className="Header is-size-4 m-5">Shopping Cart</h1>
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
      <button className="button is-primary has-text-weight-bold m-5">
        Checkout
      </button>
    </div>
  );
}

export default ShoppingCartListing;
