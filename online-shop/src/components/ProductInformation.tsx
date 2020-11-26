import React, { useState, useEffect } from "react";
import "../styles/styles.scss";
import { useHistory } from "react-router-dom";
import ProductDetail from "../interfaces/ProductDetail";
import ShoppingCart from "../interfaces/ShoppingCart";
import Axios from "axios";
import BACKEND_API from "../constants/index";
import ProductEditView from "./ProductEditView";

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
  const [product, setProduct] = useState<ProductDetail>({
    _id: "",
    name: "",
    description: "",
    category: {
      name: "",
      description: "",
    },
    supplier: {
      name: "",
    },
    price: 0,
    weight: 0,
    imageUrl: "",
  });
  const [imageUrl, setImageUrl] = useState<string>("");
  const history = useHistory();
  const [openEditView, setOpenEditView] = useState<boolean>(false);

  useEffect(() => {
    let unmounted = false;
    async function getProduct() {
      const productResult = await Axios.get(
        BACKEND_API + "products/" + productId
      );
      if (!unmounted) {
        setProduct(productResult.data);
        setImageUrl(BACKEND_API + "products/" + productId + "/images");
      }
    }
    getProduct();
    return () => {
      unmounted = true;
    };
  }, [productId]);

  let notification;
  if (!addToCartButton) {
    notification = "";
  } else {
    notification = (
      <ShoppingNotification
        productName={product.name}
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
        id={product._id}
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
            <div className="mb-6">
              <h1 className="Header is-size-4 mb-5 has-text-weight-bold">
                {product.name}
              </h1>
              <div className="Name">Name: {product.name}</div>
              <div className="Category">Category: {product.category.name}</div>
              <div className="Supplier">Supplier: {product.supplier.name}</div>
              <div className="Price">Price: {product.price} €</div>
              <div className="Weight">Weight: {product.weight} kg</div>
              <div className="Description">
                Description: {product.description}
              </div>
            </div>
            <div>
              <button
                className="button is-primary has-text-weight-bold mr-4"
                onClick={() => {
                  addToShoppingCart(shoppingCart, product);
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
                  async function deleteFromCatalogue(productId: string) {
                    await Axios.delete(BACKEND_API + "products/" + productId);
                  }
                  deleteFromCatalogue(productId);
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
