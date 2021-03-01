import React, { useEffect } from "react";
import { BlockFilters, FilterByPrice } from "styledComponents";
import { useDispatch, useSelector } from "react-redux";
import { setOrigins } from "redux/origins/selectors";
import FilterOrigins from "components/FilterOrigins/FilterOrigins";
import { originsActions } from "redux/origins/actions";
import { PriceInput } from "styledComponents";

const FilterProducts = ({
  filteredOrigins,
  actionOrig,
  actionPrice,
  min,
  max,
}) => {
  const dispatch = useDispatch();
  const origins = useSelector(setOrigins);

  useEffect(() => dispatch(originsActions.fetch()), []);

  return (
    <BlockFilters>
      <FilterOrigins
        action={actionOrig}
        origins={origins}
        filteredOrigins={filteredOrigins}
      />
      <FilterByPrice>
        <h3>PRICE RANGE</h3>
        <PriceInput
          onChange={(e) => {
            dispatch(
              actionPrice({
                minPrice: e.target.value,
                maxPrice: max,
              })
            );
          }}
        />
        -
        <PriceInput
          onChange={(e) => {
            dispatch(
              actionPrice({
                maxPrice: e.target.value,
                minPrice: min,
              })
            );
          }}
        />
      </FilterByPrice>
    </BlockFilters>
  );
};

export default FilterProducts;
