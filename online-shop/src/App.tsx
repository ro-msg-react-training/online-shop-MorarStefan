import React from "react";
import "./App.scss";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ProductInformation from "./components/ProductInformation";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <section className="hero is-primary">
      <div className="App is-family-sans-serif">
        <BrowserRouter>
          <Switch>
            <Route exact path="/products" component={ProductListing} />
            <Route exact path="/products/:id" component={ProductInformation} />
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
