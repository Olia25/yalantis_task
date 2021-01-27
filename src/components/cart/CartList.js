import React from "react";
import {
  DataOfProducts,
  DeleteIcon,
  InputQuantityStyle,
} from "styledComponents";
import { cartActions } from "redux/cart/actions";
import Delete from "assets/icons/deleteIcon.png";
import { useDispatch } from "react-redux";
import ButtonQuantity from "components/ButtonQuantity";

const CartList = ({ elem: { name, price, quantity, id } }) => {
  const dispatch = useDispatch();
  return (
    <DataOfProducts>
      <p>{name}</p>
      <p>{price} ₴</p>
      <p>
        <ButtonQuantity
          quantity={quantity}
          id={id}
          action={cartActions.subtractQuantity}
          operator="-"
          disabled={"disabled"}
        />
        <InputQuantityStyle
          value={quantity}
          onChange={({ target: { value } }) =>
            dispatch(cartActions.changeQuantity({ value, id }))
          }
        />
        <ButtonQuantity
          quantity={quantity}
          id={id}
          action={cartActions.increaseQuantity}
          operator="+"
        />
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
