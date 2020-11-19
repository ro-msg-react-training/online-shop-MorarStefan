import React from "react";
import "./App.scss";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ProductInformation from "./components/ProductInformation";
import ProductListing from "./components/ProductListing";

interface ShoppingCart {
  productId: string;
  quantity: number;
}

function App() {
  const message: Array<ShoppingCart> = [];
  return (
    <section className="hero is-primary">
      <div className="App is-family-sans-serif">
        <BrowserRouter>
          <Switch>
            <Route exact path="/products" component={ProductListing} />
            <Route
              exact
              path="/products/:id"
              render={(match) => (
                <ProductInformation {...match} message={message} />
              )}
            />
            <Route path="/">
              <Redirect to={{ pathname: "/products" }} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
