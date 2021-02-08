import React from "react";
import { ButtonOFQuantity } from "styledComponents";
import { useDispatch } from "react-redux";

const ButtonQuantity = ({ quantity, disabled, id, operator, action }) => {
  const dispatch = useDispatch();
  return (
    <ButtonOFQuantity
      disabled={quantity === 1 && disabled}
      onClick={() => {
        dispatch(action(id));
      }}
    >
      <span>{operator}</span>
    </ButtonOFQuantity>
  );
};

export default ButtonQuantity;
