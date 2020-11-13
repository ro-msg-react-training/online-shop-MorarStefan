import React from "react";
import "../styles/ProductListing.css";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

function ListItem(props: { value: Product }) {
  const product = props.value;
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductListing(props: { products: Array<Product> }) {
  const products = props.products;
  const listItems = products.map((product) => (
    <ListItem key={product.id} value={product} />
  ));
  return (
    <table className="ProductListing">
      <tr>
        <th>Product</th>
        <th>Category</th>
        <th>Price</th>
      </tr>
      {listItems}
    </table>
  );
}

export default ProductListing;
