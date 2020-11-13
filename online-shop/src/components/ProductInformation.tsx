import React from "react";
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
  return (
    <div className="ProductInformation">
      <div className="Name">Name: {product.name}</div>
      <div className="Category">Category: {product.category}</div>
      <div className="Price">Price: {product.price}</div>
      <div className="Description">Description: {product.description}</div>
      <img className="Image" src={product.image} alt={"Name"} />
    </div>
  );
}

export default ProductInformation;
