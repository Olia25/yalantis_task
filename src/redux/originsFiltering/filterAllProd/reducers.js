import { createReducer } from "@reduxjs/toolkit";
import { originsFActions } from "redux/originsFiltering/filterAllProd/actions";

const reducer = createReducer([], {
  [originsFActions.getOrigins]: (state, action) => {
    const { event, value } = action.payload;
    if (event.target.checked) {
      return [...state, value];
    } else {
      return state.filter((country) => country !== value);
    }
  },
});

export default reducer;
