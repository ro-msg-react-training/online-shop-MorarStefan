import React, { useState, useEffect } from "react";
import "../styles/styles.scss";
import { useHistory } from "react-router-dom";
import ProductDetail from "../interfaces/ProductDetail";
import ShoppingCart from "../interfaces/ShoppingCart";
import ProductEditView from "./ProductEditView";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  readProduct,
} from "../store/actions/productInformationActions";
import { getProductImageUrl } from "../services/productService";

function ShoppingNotification(props: {
  productName: string;
  setButton: Function;
}) {
  return (
    <div className="notification is-success has-text-weight-bold">
      <button
        className="delete"
        onClick={() => props.setButton(false)}
      ></button>
      The product {props.productName} was added to the shopping cart!
    </div>
  );
}

function addToShoppingCart(
  shoppingCart: Array<ShoppingCart>,
  product: ProductDetail
) {
  let isNewItem: boolean = true;
  for (const iterator of shoppingCart) {
    if (iterator.productId === product._id) {
      iterator.quantity++;
      isNewItem = false;
      break;
    }
  }
  if (isNewItem === true) {
    const quantity: number = 1;
    shoppingCart.push({
      productId: product._id,
      productName: product.name,
      categoryName: product.category.name,
      price: product.price,
      quantity: quantity,
    });
  }
}

function ProductInformation(props: {
  match: { params: { id: string } };
  message: Array<ShoppingCart>;
}) {
  const shoppingCart: Array<ShoppingCart> = props.message;

  const productId: string = props.match.params.id;
  const [addToCartButton, setAddToCartButton] = useState<boolean>(false);

  const [imageUrl, setImageUrl] = useState<string>("");
  const history = useHistory();
  const [openEditView, setOpenEditView] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setImageUrl(getProductImageUrl(productId));
    dispatch(readProduct(productId));
  }, [dispatch, productId]);

  const productInformation: any = useSelector(
    (state: any) => state.productInformation
  );

  let notification;
  if (!addToCartButton) {
    notification = "";
  } else {
    notification = (
      <ShoppingNotification
        productName={productInformation.product.name}
        setButton={setAddToCartButton}
      />
    );
  }

  let editView;
  if (!openEditView) {
    editView = "";
  } else {
    editView = (
      <ProductEditView
        id={productInformation.product._id}
        type="Edit"
        setOpenView={setOpenEditView}
      />
    );
  }

  return (
    <div>
      <div className="frame">
        <div className="columns">
          <div className="column is-three-fifths">
            {!productInformation.product ? (
              <p>Requesting product...</p>
            ) : productInformation.loading ? (
              <p>Loading product...</p>
            ) : productInformation.error ? (
              <p>Error</p>
            ) : (
              <div className="mb-6">
                <h1 className="Header is-size-4 mb-5 has-text-weight-bold">
                  {productInformation.product.name}
                </h1>
                <div className="Name">
                  Name: {productInformation.product.name}
                </div>
                <div className="Category">
                  Category: {productInformation.product.category.name}
                </div>
                <div className="Supplier">
                  Supplier: {productInformation.product.supplier.name}
                </div>
                <div className="Price">
                  Price: {productInformation.product.price} €
                </div>
                <div className="Weight">
                  Weight: {productInformation.product.weight} kg
                </div>
                <div className="Description">
                  Description: {productInformation.product.description}
                </div>
              </div>
            )}
            <div>
              <button
                className="button is-primary has-text-weight-bold mr-4"
                onClick={() => {
                  addToShoppingCart(shoppingCart, productInformation.product);
                  setAddToCartButton(true);
                  console.log(shoppingCart);
                }}
              >
                Add to cart
              </button>
              <button
                className="button is-primary has-text-weight-bold mr-4"
                onClick={() => history.push("/shoppingCart")}
              >
                Show cart
              </button>
              <button
                className="button is-primary is-light has-text-weight-bold mr-4"
                onClick={() => {
                  dispatch(deleteProduct(productInformation.product._id));
                  history.push("/products");
                }}
              >
                Remove from catalogue
              </button>
              <button
                className="button is-primary is-light has-text-weight-bold mr-4"
                onClick={() => {
                  setOpenEditView(true);
                }}
              >
                Edit
              </button>
            </div>
          </div>

          <div className="column">
            <img className="Image" src={imageUrl} alt={"Name"} />
          </div>
        </div>
      </div>

      <div className="Notification">{notification}</div>
      <div className="EditView">{editView}</div>
    </div>
  );
}

export default ProductInformation;
