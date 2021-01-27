import React, { useState } from "react";
import {
  BlockFilters,
  FilterByCountry,
  FilterByPrice,
  FilterOrigin,
  PriceButton,
} from "styledComponents";
import { ORIGINS } from "constants/constants";
import { useDispatch } from "react-redux";
import { priceActions } from "redux/priceFilter/actions";
import { originsActions } from "redux/origins/actions";
import InputsPrice from "components/InputsPrice";

const Filter = (props) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const dispatch = useDispatch();

  return (
    <BlockFilters>
      <FilterByCountry>
        <h3>ORIGINS</h3>
        {ORIGINS.map((elem) => (
          <FilterOrigin key={elem}>
            <input
              type="checkbox"
              onChange={(value) =>
                dispatch(originsActions.getOrigins({ value, elem }))
              }
            />
            <span> {elem} </span>
          </FilterOrigin>
        ))}
      </FilterByCountry>

      <FilterByPrice>
        <h3>PRICE RANGE</h3>
        <InputsPrice price={minPrice} setPrice={setMinPrice} />
        -
        <InputsPrice price={maxPrice} setPrice={setMaxPrice} />
        <PriceButton
          onClick={() =>
            dispatch(priceActions.changeMinMaxPrice({ minPrice, maxPrice }))
          }
        >
          {" "}
          <span>Ok</span>{" "}
        </PriceButton>
      </FilterByPrice>
    </BlockFilters>
  );
};

export default Filter;
