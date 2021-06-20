import { createStore, combineReducers, applyMiddleware } from "redux";
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
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { createSagaInjector } from "helper/createSagaInjector";
import RootSaga from "redux/rootSaga";

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

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

Object.assign(store, createSagaInjector(sagaMiddleware.run, RootSaga));
