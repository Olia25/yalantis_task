export const filterProducts = (products, text) => {
  return products.filter((elem) =>
    elem.name.toUpperCase().includes(text.toLocaleUpperCase())
  );
};
