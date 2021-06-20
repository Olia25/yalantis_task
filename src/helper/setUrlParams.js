export const setUrlParams = ({
  origins,
  minPrice,
  maxPrice,
  page,
  perPage,
}) => {
  const params = new URLSearchParams();
  if (origins.length > 0) {
    params.set("origins", origins);
  }
  if (minPrice) {
    params.set("minPrice", minPrice);
  }
  if (maxPrice) {
    params.set("maxPrice", maxPrice);
  }
  if (page) {
    params.set("page", page);
  }
  if (perPage) {
    params.set("perPage", perPage);
  }
  return params.toString();
};
