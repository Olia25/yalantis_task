export const selectCreateOpenModal = (state) => state.ui.createProductOpen;

export const selectUpdateOpenModal = (state) =>
  state.ui.updateProduct.updateProductOpen;

export const selectUpdateProduct = (state) =>
  state.ui.updateProduct.selectProduct;
