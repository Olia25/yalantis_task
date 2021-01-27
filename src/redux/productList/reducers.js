import { createReducer } from "@reduxjs/toolkit";
import { productsActions } from "redux/productList/actions";

const initialState = {
  data: [],
  error: null,
  loading: false,
  success: false,
};

const reducers = createReducer(initialState, {
  [productsActions.start]: (state) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [productsActions.success]: (state, action) => ({
    ...state,
    loading: false,
    succeed: true,
    data: action.payload,
  }),
  [productsActions.error]: (state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.payload,
  }),
});

export default reducers;
