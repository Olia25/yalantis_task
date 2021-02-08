export const sortProducts = (value, selectedValue) => {
  const sortedProducts = [...value.data];
  switch (selectedValue) {
    case "asc":
      return sortedProducts.sort((a, b) => a.price - b.price);
    case "desc":
      return sortedProducts.sort((a, b) => b.price - a.price);
    default:
      return sortedProducts;
  }
};
