import { createAction } from "@reduxjs/toolkit";

export const originsActions = {
  start: createAction("FETCH_START_ORIGINS"),
  success: createAction("FETCH_SUCCESS_ORIGINS"),
  error: createAction("FETCH_ERROR_ORIGINS"),
};
