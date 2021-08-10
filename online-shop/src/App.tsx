import React from "react";
import "./App.scss";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ProductInformation from "./components/ProductInformation";
import ProductListing from "./components/ProductListing";
import ShoppingCartListing from "./components/ShoppingCartListing";
import ShoppingCart from "./interfaces/ShoppingCart";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const message: Array<ShoppingCart> = [];
  return (
    <Provider store={store}>
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
              <Route
                exact
                path="/shoppingCart"
                render={(match) => (
                  <ShoppingCartListing {...match} message={message} />
                )}
              />
              <Route path="/">
                <Redirect to={{ pathname: "/products" }} />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </section>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
