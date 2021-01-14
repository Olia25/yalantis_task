import "./App.css";
import React, { useContext } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Home from "Components/products";
import SelectedProduct from "./Components/selected-product";
import Orders from "Components/cart";
import Lemon from "./assets/lemon.jpg";
import Cart from "./assets/cartIcon.png";
import {
  Logo,
  CartIcon,
  Header,
  HeadSubTotal,
  StyledLink,
  CartContainer,
} from "./styledComponents";
import ProductContext from "./context";
import { subTotal } from "utils";

function App() {
  const { selectedProducts } = useContext(ProductContext);
  const match = useRouteMatch("/orders");

  return (
    <>
      <Header>
        <Link to="/">
          <Logo src={Lemon} alt="lemon" />
        </Link>
        {!match && (
          <StyledLink to="/orders">
            <CartContainer>
              <h4>
                {" "}
                <HeadSubTotal>Subtotal:</HeadSubTotal>{" "}
                {subTotal(selectedProducts)} ₴
              </h4>
              <CartIcon src={Cart} alt="cart" />
            </CartContainer>
          </StyledLink>
        )}
      </Header>
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/products/:productId">
          <SelectedProduct />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
