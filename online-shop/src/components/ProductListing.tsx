import React from "react";
import "../styles/ProductListing.scss";
import { useHistory } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

const products: Array<Product> = [
  {
    id: 0,
    name: "Notebook Basic 15",
    category: "Laptops",
    price: 956,
  },
  {
    id: 1,
    name: "Notebook Basic 17",
    category: "Laptops",
    price: 1249,
  },
  {
    id: 2,
    name: "Notebook Basic 18",
    category: "Laptops",
    price: 1570,
  },
  {
    id: 3,
    name: "Notebook Basic 19",
    category: "Laptops",
    price: 1650,
  },
  {
    id: 4,
    name: "ITelO Vault",
    category: "Accessories",
    price: 299,
  },
  {
    id: 5,
    name: "Notebook Professional 15",
    category: "Accessories",
    price: 1999,
  },
];

function ListItem(props: { value: Product }) {
  const product = props.value;
  const history = useHistory();
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>
        <button
          className="button is-small"
          onClick={() => history.push("/products/" + product.id)}
        >
          <span className="icon has-text-info">
            <i className="fas fa-2x fa-info-circle"></i>
          </span>
        </button>
      </td>
    </tr>
  );
}

function ProductListing() {
  const listItems = products.map((product) => (
    <ListItem key={product.id} value={product} />
  ));
  return (
    <table className="table is-bordered is-fullwidth">
      <tr>
        <th>Product</th>
        <th>Category</th>
        <th>Price</th>
        <th>Details</th>
      </tr>
      {listItems}
    </table>
  );
}

export default ProductListing;
