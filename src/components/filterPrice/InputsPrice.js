import { PriceInput } from "styledComponents";
import React from "react";

const InputsPrice = ({ price, setPrice }) => {
  return (
    <PriceInput
      value={price}
      onChange={({ target: { value } }) => setPrice(value)}
    />
  );
};

export default InputsPrice;
