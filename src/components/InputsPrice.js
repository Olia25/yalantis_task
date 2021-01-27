import { PriceInput } from "styledComponents";
import React from "react";

const InputsPrice = (props) => {
  return (
    <PriceInput
      value={props.price}
      onChange={({ target: { value } }) => props.setPrice(value)}
    />
  );
};

export default InputsPrice;
