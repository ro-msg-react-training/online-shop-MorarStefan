import React, { useState } from "react";
import "../styles/ProductInformation.scss";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  description: string;
}

const productDetails: Array<Product> = [
  {
    id: 0,
    name: "Notebook Basic 15",
    category: "Laptops",
    image:
      "https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
    price: 956,
    description:
      'Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro',
  },
  {
    id: 1,
    name: "Notebook Basic 17",
    category: "Laptops",
    image:
      "https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg",
    price: 1249,
    description:
      'Notebook Basic 17 with 2,80 GHz quad core, 17" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro',
  },
  {
    id: 2,
    name: "Notebook Basic 18",
    category: "Laptops",
    image:
      "https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1002.jpg",
    price: 1570,
    description:
      'Notebook Basic 18 with 2,80 GHz quad core, 18" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro',
  },
  {
    id: 3,
    name: "Notebook Basic 19",
    category: "Laptops",
    image:
      "https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1003.jpg",
    price: 1650,
    description:
      'Notebook Basic 19 with 2,80 GHz quad core, 19" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro',
  },
  {
    id: 4,
    name: "ITelO Vault",
    category: "Accessories",
    image:
      "https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1007.jpg",
    price: 299,
    description: "Digital Organizer with State-of-the-Art Storage Encryption",
  },
  {
    id: 5,
    name: "Notebook Professional 15",
    category: "Accessories",
    image:
      "https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1010.jpg",
    price: 1999,
    description:
      'Notebook Professional 15 with 2,80 GHz quad core, 15" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro',
  },
];

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

function ProductInformation(props: { match: { params: { id: string } } }) {
  const product: Product = productDetails[parseInt(props.match.params.id, 10)];
  const [addToCartButton, setAddToCartButton] = useState<boolean>(false);

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
            <p className="mb-6">
              <div className="Name">Name: {product.name}</div>
              <div className="Category">Category: {product.category}</div>
              <div className="Price">Price: {product.price}</div>
              <div className="Description">
                Description: {product.description}
              </div>
            </p>
            <div>
              <button
                className="button is-primary has-text-weight-bold"
                onClick={() => setAddToCartButton(true)}
              >
                Add to cart
              </button>
            </div>
          </div>

          <div className="column">
            <img className="Image" src={product.image} alt={"Name"} />
          </div>
        </div>
      </div>

      <div className="Notification">{notification}</div>
    </div>
  );
}

export default ProductInformation;
