import React, { useState, useEffect } from "react";
import "../styles/ProductInformation.scss";
import ProductDetail from "../interfaces/ProductDetail";
import Axios from "axios";
import BACKEND_API from "../constants/index";

interface ShoppingCart {
  productId: string;
  quantity: number;
}

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
  productId: string
) {
  let isNewItem: boolean = true;
  for (const iterator of shoppingCart) {
    if (iterator.productId === productId) {
      iterator.quantity++;
      isNewItem = false;
      break;
    }
  }
  if (isNewItem === true) {
    const quantity: number = 1;
    shoppingCart.push({ productId, quantity });
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
    },
    supplier: {
      name: "",
    },
    price: 0,
    weight: 0,
    imageUrl: "",
  });
  const [imageUrl, setImageUrl] = useState<string>("");

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
      ></ShoppingNotification>
    );
  }

  return (
    <div>
      <div className="ProductInformation">
        <div className="columns">
          <div className="column is-three-fifths">
            <div className="mb-6">
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
                className="button is-primary has-text-weight-bold"
                onClick={() => {
                  addToShoppingCart(shoppingCart, productId);
                  setAddToCartButton(true);
                  console.log(shoppingCart);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>

          <div className="column">
            <img className="Image" src={imageUrl} alt={"Name"} />
          </div>
        </div>
      </div>

      <div className="Notification">{notification}</div>
    </div>
  );
}

export default ProductInformation;
