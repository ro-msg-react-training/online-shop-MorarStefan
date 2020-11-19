import React, { useState, useEffect } from "react";
import "../styles/ProductListing.scss";
import { useHistory } from "react-router-dom";
import Product from "../interfaces/Product";
import Axios from "axios";
import BACKEND_API from "../constants/index";

function ListItem(props: { value: Product }) {
  const product = props.value;
  const history = useHistory();
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.category.name}</td>
      <td>{product.price}</td>
      <td>
        <button
          className="button is-small"
          onClick={() => history.push("/products/" + product._id)}
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
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    let unmounted = false;
    async function getProducts() {
      const result = await Axios.get(BACKEND_API + "products");
      if (!unmounted) {
        setProducts(result.data);
      }
    }
    getProducts();
    return () => {
      unmounted = true;
    };
  }, []);

  const listItems = products.map((product) => (
    <ListItem key={product._id} value={product} />
  ));
  return (
    <table className="table is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Price</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>{listItems}</tbody>
    </table>
  );
}

export default ProductListing;
