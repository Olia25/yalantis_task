import { createReducer } from "@reduxjs/toolkit";
import { productActions } from "redux/productInfo/actions";

const initialState = {
  data: {},
  error: null,
  loading: false,
  success: false,
};

const reducers = createReducer(initialState, {
  // [productActions.fetch]: (state) => ({
  //   ...state,
  //   error: null,
  //   loading: true,
  // }),
  [productActions.start]: (state) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [productActions.success]: (state, action) => ({
    ...state,
    loading: false,
    succeed: true,
    data: action.payload,
  }),
  [productActions.error]: (state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.payload,
  }),
});

export default reducers;
