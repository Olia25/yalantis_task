import { createReducer } from "@reduxjs/toolkit";
import { originsActions } from "redux/origins/actions";

const reducer = createReducer([], {
  [originsActions.getOrigins]: (state, action) => {
    const { value, elem } = action.payload;
    if (value.target.checked) {
      return [...state, elem];
    } else {
      return state.filter((country) => country !== elem);
    }
  },
});

export default reducer;
