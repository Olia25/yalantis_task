import { createReducer } from "@reduxjs/toolkit";
import { originsActions } from "redux/origins/actions";

const initialState = {
  data: [],
  error: null,
  loading: false,
  success: false,
};

const reducers = createReducer(initialState, {
  [originsActions.start]: (state) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [originsActions.success]: (state, action) => ({
    ...state,
    loading: false,
    succeed: true,
    data: action.payload,
  }),
  [originsActions.error]: (state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.payload,
  }),
});

export default reducers;
