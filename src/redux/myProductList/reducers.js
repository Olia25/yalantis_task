import { createReducer } from "@reduxjs/toolkit";
import { myProductsActions } from "redux/myProductList/actions";

const initialState = {
  data: [],
  error: null,
  loading: false,
  success: false,
  page: 1,
  totalItems: 0,
};

const reducers = createReducer(initialState, {
  [myProductsActions.start]: (state) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [myProductsActions.success]: (state, action) => ({
    ...state,
    loading: false,
    succeed: true,
    data: action.payload.items,
    totalItems: action.payload.totalItems,
  }),
  [myProductsActions.error]: (state, action) => ({
    ...state,
    loading: false,
    succeed: false,
    error: action.payload,
  }),
  [myProductsActions.addMyProduct]: (state, action) => {
    const prod = action.payload;
    console.log("prod", prod);
    return {
      ...state,
      data: [...state.data, prod],
    };
  },
  [myProductsActions.updateMyProduct]: (state, action) => {
    const { value, productId } = action.payload;
    return {
      ...state,
      data: state.data.map((elem) => {
        if (elem.id === productId) {
          return {
            ...elem,
            name: value.name,
            price: value.price,
            origin: value.origin,
          };
        }
        return elem;
      }),
    };
  },
  [myProductsActions.deleteMyProduct]: (state, action) => {
    return {
      ...state,
      data: state.data.filter((elem) => elem.id !== action.payload),
    };
  },
  [myProductsActions.setPage]: (state, action) => ({
    ...state,
    page: action.payload,
  }),
});

export default reducers;
