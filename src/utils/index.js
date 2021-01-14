export const subTotal = (selectedProducts) =>
  selectedProducts.reduce((sum, elem) => sum + elem.price * elem.quantity, 0);

export const addProduct = (
  selectedProducts,
  setSelectedProducts,
  id,
  product
) => {
  const check = selectedProducts.find((elem) => elem.id === id);
  setSelectedProducts(
    check
      ? selectedProducts.map((elem) => {
          if (elem.id === id) {
            return { ...elem, quantity: elem.quantity + 1 };
          }
          return elem;
        })
      : [...selectedProducts, { ...product, quantity: 1 }]
  );
};
