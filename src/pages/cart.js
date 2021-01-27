import React from "react";
import {
  Subtotal,
  EmptyCart,
  TopTable,
  WidthCardTable,
} from "styledComponents";
import { useSelector } from "react-redux";
import { useSubTotal } from "helper/useSubTotal";
import CartList from "components/cart/CartList";
import { setCart } from "redux/cart/selectors";

const Orders = () => {
  const selectProducts = useSelector(setCart);
  const subTotal = useSubTotal();

  return (
    <WidthCardTable>
      {selectProducts && selectProducts.length > 0 ? (
        <div>
          <TopTable>
            <p>Product</p>
            <p>Unit Price</p>
            <p>Quantity</p>
            <p>Row Total</p>
            <p></p>
            {/* need to redo this layout*/}
          </TopTable>
          {selectProducts.map((elem) => (
            <CartList key={elem.id} elem={elem} />
          ))}
          <h3>
            {" "}
            <Subtotal>Subtotal:</Subtotal> {subTotal}
          </h3>
        </div>
      ) : (
        <EmptyCart>Your shopping cart is empty</EmptyCart>
      )}
    </WidthCardTable>
  );
};

export default Orders;
