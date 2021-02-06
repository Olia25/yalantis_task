import "./App.css";
import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Home from "pages/Products";
import SelectedProduct from "pages/SelectedProduct";
import Cart from "pages/Cart";
import MyProducts from "pages/MyProducts";
import Lemon from "assets/icons/lemon.jpg";
import CartIc from "assets/icons/cartIcon.png";
import Product from "assets/icons/product.png";
import {
  Logo,
  CartIcon,
  OwnProducts,
  Header,
  LogoTitle,
  StyledLink,
  LogoContainer,
  Button,
  NavbarBrand,
    Navbar,
} from "./styledComponents";
import { useSubTotal } from "helper/useSubTotal";
import { useDispatch } from "react-redux";
import { cartActions } from "redux/cart/actions";
import CreateProdModal from "components/modal/CreateProdModal";

function App() {
  const matchCart = useRouteMatch("/cart");
  const matchMyProducts = useRouteMatch("/myProducts");
  const subTotal = useSubTotal();
  const dispatch = useDispatch();

  return (
    <>
      <Header>
        <NavbarBrand>
          <Link to="/">
            <Logo src={Lemon} alt="lemon" />
          </Link>
        </NavbarBrand>
        <Navbar>
          <StyledLink to="/myProducts">
            <LogoContainer>
              <OwnProducts src={Product} alt="products" />
              <LogoTitle>Own Prod</LogoTitle>
            </LogoContainer>
          </StyledLink>
          <LogoContainer>
            <CreateProdModal />
            <LogoTitle>New Ad</LogoTitle>
          </LogoContainer>
          {!matchCart && !matchMyProducts && (
            <StyledLink to="/cart">
              <LogoContainer>
                <CartIcon src={CartIc} alt="cart" />
                <LogoTitle>{subTotal} ₴</LogoTitle>
              </LogoContainer>
            </StyledLink>
          )}
          {matchCart && (
            <Button onClick={() => dispatch(cartActions.clearCart())}>
              Clear Cart
            </Button>
          )}
        </Navbar>
      </Header>
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/myProducts">
          <MyProducts />
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
