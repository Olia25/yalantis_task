import React, { useState } from "react";
import { BlockFilters, FilterByPrice } from "styledComponents";
import { API_URL } from "constants/constants";
import { useSelector } from "react-redux";
import InputsPrice from "components/filterPrice/InputsPrice";
import { setOrigins } from "redux/origins/selectors";
import useOrigin from "helper/apiRequest/useOrigin";
import FilterOrigins from "components/FilterOrigins/FilterOrigins";
import PriceButton from "components/filterPrice/PriceButton";

const FilterProducts = ({ filteredOrigins, actionOrig, actionPrice }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useOrigin(`${API_URL}/products-origins`);
  const origins = useSelector(setOrigins);

  return (
    <BlockFilters>
      <FilterOrigins
        action={actionOrig}
        origins={origins}
        filteredOrigins={filteredOrigins}
      />
      <FilterByPrice>
        <h3>PRICE RANGE</h3>
        <InputsPrice price={minPrice} setPrice={setMinPrice} />
        -
        <InputsPrice price={maxPrice} setPrice={setMaxPrice} />
        <PriceButton action={actionPrice({ minPrice, maxPrice })} />
      </FilterByPrice>
    </BlockFilters>
  );
};

export default FilterProducts;
