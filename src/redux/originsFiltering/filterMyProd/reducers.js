import { createReducer } from "@reduxjs/toolkit";
import { originsFMyProdActions } from "redux/originsFiltering/filterMyProd/actions";

const reducer = createReducer([], {
  [originsFMyProdActions.getOriginsMP]: (state, action) => {
    const { event, value } = action.payload;
    if (event.target.checked) {
      return [...state, value];
    } else {
      return state.filter((country) => country !== value);
    }
  },
});

export default reducer;
