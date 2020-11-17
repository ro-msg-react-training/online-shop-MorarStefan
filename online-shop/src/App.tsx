import React from "react";
import "./App.scss";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductInformation from "./components/ProductInformation";
import ProductListing from "./components/ProductListing";

const product = [
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
        <BrowserRouter>
          <Switch>
            <Route exact path="/products">
              <ProductListing products={products} />
            </Route>
            <Route exact path="/products/:id">
              <ProductInformation product={product[0]} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
