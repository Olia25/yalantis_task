import { createReducer } from "@reduxjs/toolkit";

import { uiActions } from "redux/ui/actions";

const initialState = {
  createProductOpen: false,
  updateProduct: { updateProductOpen: false, selectProduct: {} },
};

const reducer = createReducer(initialState, {
  [uiActions.createModal.open]: (state) => ({
    ...state,
    createProductOpen: true,
  }),
  [uiActions.createModal.close]: (state) => ({
    ...state,
    createProductOpen: false,
  }),
  [uiActions.updateModal.open]: (state, action) => ({
    ...state,
    updateProduct: {
      ...state.updateProduct,
      updateProductOpen: true,
      selectProduct: action.payload,
    },
  }),
  [uiActions.updateModal.close]: (state) => ({
    ...state,
    updateProduct: {
      ...state.updateProduct,
      updateProductOpen: false,
      selectProduct: {},
    },
  }),
});

export default reducer;
