import "./App.css";
import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Home from "pages/products";
import SelectedProduct from "pages/selectedProduct";
import Orders from "pages/cart";
import Lemon from "assets/icons/lemon.jpg";
import Cart from "assets/icons/cartIcon.png";
import {
  Logo,
  CartIcon,
  Header,
  HeadSubTotal,
  StyledLink,
  CartContainer,
  Button,
} from "./styledComponents";
import { useSubTotal } from "helper/useSubTotal";
import { useDispatch } from "react-redux";
import { cartActions } from "redux/cart/actions";

function App() {
  const match = useRouteMatch("/orders");
  const subTotal = useSubTotal();
  const dispatch = useDispatch();

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
                <HeadSubTotal>{subTotal} ₴</HeadSubTotal>
              </h4>
              <CartIcon src={Cart} alt="cart" />
            </CartContainer>
          </StyledLink>
        )}
        {match && (
          <Button onClick={() => dispatch(cartActions.clearCart())}>
            {" "}
            Clear Cart{" "}
          </Button>
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
