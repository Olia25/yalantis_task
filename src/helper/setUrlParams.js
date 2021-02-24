export const setUrlParams = (
  getOrigins,
  pricesMin,
  pricesMax,
  page,
  perPage
) => {
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
  if (page) {
    params.set("page", page);
  }
  if (perPage) {
    params.set("perPage", perPage);
  }
  return params.toString();
};
