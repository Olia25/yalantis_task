import { createAction } from "@reduxjs/toolkit";

export const uiActions = {
  createModal: {
    open: createAction("OPEN_CREATE_MODAL"),
    close: createAction("CLOSE_CREATE_MODAL"),
  },
  updateModal: {
    open: createAction("OPEN_UPDATE_MODAL"),
    close: createAction("CLOSE_UPDATE_MODAL"),
  },
};
