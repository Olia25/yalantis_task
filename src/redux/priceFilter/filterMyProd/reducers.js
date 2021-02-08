import { createReducer } from "@reduxjs/toolkit";
import { priceMyProdActions } from "redux/priceFilter/filterMyProd/actions";

const initialState = {
  min: null,
  max: null,
};

const reducer = createReducer(initialState, {
  [priceMyProdActions.changeMinMaxPrice]: (state, action) => {
    const { minPrice, maxPrice } = action.payload;
    return { ...state, min: Number(minPrice), max: Number(maxPrice) };
  },
});

export default reducer;
