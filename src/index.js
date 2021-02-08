import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "App";
import reportWebVitals from "reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import products from "redux/productList/reducers";
import cart from "redux/cart/reducers";
import product from "redux/productInfo/reducers";
import price from "redux/priceFilter/filterAllProd/reducers";
import priceMyProd from "redux/priceFilter/filterMyProd/reducers";
import origins from "redux/origins/reducers";
import modal from "redux/ui/reducers";
import filter from "redux/originsFiltering/filterAllProd/reducers";
import filterMyProd from "redux/originsFiltering/filterMyProd/reducers";
import myProducts from "redux/myProductList/reducers";

const reducers = combineReducers({
  productList: products,
  productInfo: product,
  cart,
  priceFilterAllProd: price,
  priceFilterMyProd: priceMyProd,
  origins,
  ui: modal,
  filterOrigAllProd: filter,
  filterOrigMyProd: filterMyProd,
  myProductList: myProducts,
});
const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
