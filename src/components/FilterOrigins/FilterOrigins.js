import React from "react";
import { FilterByCountry, FilterOrigin } from "styledComponents";
import { useDispatch } from "react-redux";

const FilterOrigins = ({ origins, filteredOrigins, action }) => {
  const dispatch = useDispatch();

  return (
    <FilterByCountry>
      <h3>ORIGINS</h3>
      {origins.map(({ value }) => (
        <FilterOrigin key={value}>
          <input
            checked={filteredOrigins.includes(value)}
            type="checkbox"
            onChange={(event) => dispatch(action({ event, value }))}
          />
          <span> {value} </span>
        </FilterOrigin>
      ))}
    </FilterByCountry>
  );
};

export default FilterOrigins;
