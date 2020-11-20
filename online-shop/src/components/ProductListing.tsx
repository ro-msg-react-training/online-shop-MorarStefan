import React, { useState, useEffect } from "react";
import "../styles/styles.scss";
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
    <div className="frame">
      <h1 className="Header is-size-4 m-5 has-text-weight-bold">Products</h1>
      <table className="table is-bordered is-fullwidth mb-5">
        <thead>
          <tr>
            <th className="has-text-white">Product</th>
            <th className="has-text-white">Category</th>
            <th className="has-text-white">Price</th>
            <th className="has-text-white">Details</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    </div>
  );
}

export default ProductListing;
