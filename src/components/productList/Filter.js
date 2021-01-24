import React, { useState } from "react";
import {
  BlockFilters,
  FilterByCountry,
  FilterByPrice,
  FilterOrigin,
  PriceButton,
  PriceInput,
} from "styledComponents";
import { ORIGINS } from "constants/constants";

const Filter = (props) => {
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);

  const getCheckOrigins = (checked, elem) => {
    props.setOrigins(
      checked
        ? [...props.origins, elem]
        : props.origins.filter((country) => country !== elem)
    );
  };

  const onClick = () => {
    props.setPriceFiltering({ minPrice: minPrice, maxPrice: maxPrice });
  };

  return (
    <BlockFilters>
      <FilterByCountry>
        <h3>ORIGINS</h3>
        {ORIGINS.map((elem, index) => (
          <FilterOrigin key={index}>
            {" "}
            <input
              type="checkbox"
              onChange={(value) => getCheckOrigins(value.target.checked, elem)}
            />
            <span> {elem} </span>
          </FilterOrigin>
        ))}
      </FilterByCountry>

      <FilterByPrice>
        <h3>PRICE RANGE</h3>
        <PriceInput
          value={minPrice}
          onChange={({ target: { value } }) => setMinPrice(value)}
        />
        -
        <PriceInput
          value={maxPrice}
          onChange={({ target: { value } }) => setMaxPrice(value)}
        />
        <PriceButton onClick={onClick}>
          {" "}
          <span>Ok</span>{" "}
        </PriceButton>
      </FilterByPrice>
    </BlockFilters>
  );
};

export default Filter;
