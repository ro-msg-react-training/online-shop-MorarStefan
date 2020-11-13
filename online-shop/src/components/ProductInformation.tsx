import React, { useState } from "react";
import "../styles/ProductInformation.css";

interface Product {
  name: string;
  category: string;
  image: string;
  price: number;
  description: string;
}

function ProductInformation(props: { product: Product }) {
  const product = props.product;
  const [button, setButton] = useState<boolean>(false);

  let image;
  if (!button) {
    image = "";
  } else {
    image = <img className="Image" src={product.image} alt={"Name"} />;
  }

  return (
    <div className="ProductInformation">
      <h1>{product.name}</h1>
      <div className="Name">Name: {product.name}</div>
      <div className="Category">Category: {product.category}</div>
      <div className="Price">Price: {product.price}</div>
      <div className="Description">Description: {product.description}</div>
      <div>
        <button className="Button" onClick={() => setButton(!button)}>
          Show/Hide image
        </button>
      </div>
      <div className="Image">{image}</div>
    </div>
  );
}

export default ProductInformation;
