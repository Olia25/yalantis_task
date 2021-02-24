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
    return {
      ...state,
      data: [...state.data, prod],
    };
  },
  [myProductsActions.updateMyProduct]: (state, action) => {
    const { obj, id } = action.payload;
    return {
      ...state,
      data: state.data.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            name: obj.name,
            price: obj.price,
            origin: obj.origin,
          };
        }
        return elem;
      }),
    };
  },
  [myProductsActions.deleteMyProduct]: (state, action) => {
    const { productId } = action.payload;
    return {
      ...state,
      data: state.data.filter((elem) => elem.id !== productId),
    };
  },
  [myProductsActions.setPage]: (state, action) => ({
    ...state,
    page: action.payload,
  }),
});

export default reducers;
