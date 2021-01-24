import React from "react";
import { ButtonOFQuantity, DataOfProducts, DeleteIcon } from "styledComponents";
import { cartActions } from "redux/cart/actions";
import Delete from "assets/icons/deleteIcon.png";
import { useDispatch } from "react-redux";

const CartList = ({ elem: { name, price, quantity, id } }) => {
  const dispatch = useDispatch();
  return (
    <DataOfProducts>
      <p>{name}</p>
      <p>{price} ₴</p>
      <p>
        <ButtonOFQuantity
          disabled={quantity === 1 && "disabled"}
          onClick={() => dispatch(cartActions.subtractQuantity(id))}
        >
          {" "}
          -{" "}
        </ButtonOFQuantity>
        <input
          className="inputt"
          value={quantity}
          onChange={({ target: { value } }) => {
            dispatch(cartActions.changeQuantity({ value, id }));
          }}
        />
        <ButtonOFQuantity
          onClick={() => dispatch(cartActions.increaseQuantity(id))}
        >
          {" "}
          +{" "}
        </ButtonOFQuantity>
      </p>
      <p>{price * quantity} ₴</p>
      <p>
        <DeleteIcon
          src={Delete}
          alt="delete"
          onClick={() => dispatch(cartActions.deleteProduct(id))}
        />
      </p>
    </DataOfProducts>
  );
};

export default CartList;
