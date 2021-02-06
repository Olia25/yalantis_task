import { createReducer } from "@reduxjs/toolkit";
import { priceActions } from "redux/priceFilter/filterAllProd/actions";

const initialState = {
  min: null,
  max: null,
};

const reducer = createReducer(initialState, {
  [priceActions.changeMinMaxPrice]: (state, action) => {
    const { minPrice, maxPrice } = action.payload;
    return { ...state, min: Number(minPrice), max: Number(maxPrice) };
  },
});

export default reducer;
