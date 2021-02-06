export const sortProducts = (value, selectedValue) => {
  const sortedProducts = [...value.data];
  if (selectedValue === "asc") {
    return sortedProducts.sort((a, b) => a.price - b.price);
  }
  if (selectedValue === "desc") {
    return sortedProducts.sort((a, b) => b.price - a.price);
  }
  return sortedProducts;
};
