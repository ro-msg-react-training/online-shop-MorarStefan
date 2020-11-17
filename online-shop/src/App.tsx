import React from "react";
import "./App.scss";
import ProductInformation from "./components/ProductInformation";
import Products from "./components/ProductListing";

const product = {
  id: 1,
  name: "Notebook Basic 17",
  category: "Laptops",
  image:
    "https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg",
  price: 1249,
  description:
    'Notebook Basic 17 with 2,80 GHz quad core, 17" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro',
};

const products = [
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

function App() {
  return (
    <section className="hero is-primary">
      <div className="App is-family-sans-serif">
        <ProductInformation product={product} />
        <Products products={products} />
      </div>
    </section>
  );
}

export default App;
