import React, { useState, useEffect } from "react";
import { BlockFilters, FilterByPrice } from "styledComponents";
import { useDispatch, useSelector } from "react-redux";
import InputsPrice from "components/filterPrice/InputsPrice";
import { setOrigins } from "redux/origins/selectors";
import FilterOrigins from "components/FilterOrigins/FilterOrigins";
import PriceButton from "components/filterPrice/PriceButton";
import { originsActions } from "redux/origins/actions";

const FilterProducts = ({ filteredOrigins, actionOrig, actionPrice }) => {
  const dispatch = useDispatch();

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => dispatch(originsActions.fetch()), []);

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
