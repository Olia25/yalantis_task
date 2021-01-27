import React from "react";
import { ButtonOFQuantity } from "styledComponents";

import { useDispatch } from "react-redux";

const ButtonQuantity = (props) => {
  const dispatch = useDispatch();
  return (
    <ButtonOFQuantity
      disabled={props.quantity === 1 && props.disabled}
      onClick={() => {
        dispatch(props.action(props.id));
      }}
    >
      <span>{props.operator}</span>
    </ButtonOFQuantity>
  );
};

export default ButtonQuantity;
