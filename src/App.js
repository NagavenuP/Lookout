import React from "react";
import Cart from "./pages/cart";
import Header from "./components/header";
import Products from "./pages/products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
