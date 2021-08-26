import React, { useState, useEffect } from "react";
import "../styles/styles.scss";
import { useHistory } from "react-router-dom";
import Product from "../interfaces/Product";
import ProductEditView from "./ProductEditView";
import { readProducts } from "../store/actions/productListActions";
import { useDispatch, useSelector } from "react-redux";
import { compose, withState } from "recompose";
import { withSpinnerWhileLoading } from "./LoadingIndicator";

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
  const [openCreateView, setOpenCreateView] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readProducts());
  }, [dispatch]);

  const productList: any = useSelector((state: any) => state.productList);

  const enhance = compose(
    withState("loading", "setLoading", productList.loading),
    withSpinnerWhileLoading
  );

  const Spinner = enhance(() => <div className="Spinner"></div>);

  const listItems = productList.products.map((product: Product) => (
    <ListItem key={product._id} value={product} />
  ));

  let createView;
  if (!openCreateView) {
    createView = "";
  } else {
    createView = (
      <ProductEditView id="" type="Add" setOpenView={setOpenCreateView} />
    );
  }

  return (
    <div className="frame">
      <h1 className="Header is-size-4 m-5 has-text-weight-bold">Products</h1>
      <Spinner />
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
      <button
        className="button is-primary has-text-weight-bold mr-4"
        onClick={() => {
          setOpenCreateView(true);
        }}
      >
        Add
      </button>
      <div className="CreateView">{createView}</div>
    </div>
  );
}

export default ProductListing;
