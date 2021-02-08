export const setUrlParams = (getOrigins, pricesMin, pricesMax) => {
  const params = new URLSearchParams();
  if (getOrigins.length > 0) {
    params.set("origins", getOrigins);
  }
  if (pricesMin) {
    params.set("minPrice", pricesMin);
  }
  if (pricesMax) {
    params.set("maxPrice", pricesMax);
  }
  return params.toString();
};
