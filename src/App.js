import './App.css';
import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/products';
import SelectedProduct from './pages/selected-product';
import Orders from './pages/cart';
import Lemon from './lemon.jpg';
import Cart from './cartIcon.png'
import {Logo, CartIcon, Header, Subtotal, StyledLink} from './styled-components'
import ProductContext from "./context";
import {subTotal} from "./utils";

function App() {
  const {selectedProducts} = useContext(ProductContext)

  return (
    <div className='App'>
      <Router>
        <Header>
        <Link to='/'>
          <Logo src={Lemon} alt='lemon'/>
        </Link>
        <StyledLink to='/orders'>
          <CartIcon src={Cart} alt='cart'/>
          <h3> <Subtotal>Subtotal:</Subtotal> {subTotal(selectedProducts)} ₴</h3>
        </StyledLink>
        </Header>

        <Switch>
          <Route path = '/orders'>
            <Orders />
          </Route>
          <Route path = '/products/:productId'>
            <SelectedProduct />
          </Route>
          <Route path = '/'>
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
