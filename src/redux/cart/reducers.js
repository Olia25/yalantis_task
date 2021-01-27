import { createReducer } from "@reduxjs/toolkit";
import { cartActions } from "redux/cart/actions";

const productsCart = createReducer([], {
  [cartActions.addProducts]: (state, action) => {
    const check = state.find(({ id }) => id === action.payload.id);
    if (check) {
      return state.map((elem) => {
        if (elem.id === action.payload.id) {
          return { ...elem, quantity: elem.quantity + 1 };
        }
        return elem;
      });
    } else {
      return [...state, { ...action.payload, quantity: 1 }];
    }
  },
  [cartActions.deleteProduct]: (state, action) => {
    return state.filter((elem) => elem.id !== action.payload);
  },
  [cartActions.increaseQuantity]: (state, action) => {
    return state.map((elem) => {
      if (elem.id === action.payload) {
        return { ...elem, quantity: elem.quantity + 1 };
      }
      return elem;
    });
  },
  [cartActions.subtractQuantity]: (state, action) => {
    return state.map((elem) => {
      if (elem.id === action.payload) {
        return { ...elem, quantity: elem.quantity - 1 };
      }
      return elem;
    });
  },
  [cartActions.changeQuantity]: (state, action) => {
    const { value, id } = action.payload;
    return state.map((elem) => {
      if (elem.id === id) {
        return { ...elem, quantity: Number(value) };
      }
      return elem;
    });
  },
  [cartActions.clearCart]: () => {
    return [];
  },
});

export default productsCart;
