import { createAction } from "@reduxjs/toolkit";

export const cartActions = {
  addProducts: createAction("ADD_PROD_TO_CART"),
  increaseQuantity: createAction("INCREMENT_QUANTITY"),
  subtractQuantity: createAction("DECREMENT_QUANTITY"),
  changeQuantity: createAction("CHANGE_QUANTITY"),
  deleteProduct: createAction("DELETE_PROD_FROM_CART"),
  clearCart: createAction("CLEAR_CART"),
};
