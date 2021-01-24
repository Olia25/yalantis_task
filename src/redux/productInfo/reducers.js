import { createReducer } from "@reduxjs/toolkit";
import { productActions } from "redux/productInfo/actions";

// export const start = createAction("FETCH_START_PRODUCT");
// export const success = createAction("FETCH_SUCCESS_PRODUCT");
// export const error = createAction("FETCH_ERROR_PRODUCT");

const initialState = {
  data: {},
  error: null,
  loading: false,
  success: false,
};

const reducers = createReducer(initialState, {
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
