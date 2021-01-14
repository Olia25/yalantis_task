import React, { useContext } from "react";
import ProductContext from "context";
import {
  Subtotal,
  EmptyCart,
  DeleteIcon,
  TopTable,
  WidthCardTable,
  DataOfProducts,
} from "styledComponents";
import Delete from "../assets/deleteIcon.png";

const Orders = () => {
  const { selectedProducts, setSelectedProducts } = useContext(ProductContext);
  const subTotal = selectedProducts.reduce(
    (sum, elem) => sum + elem.price * elem.quantity,
    0
  );

  const deleteProduct = (id) => {
    setSelectedProducts(selectedProducts.filter((elem) => elem.id !== id));
  };

  return (
    <WidthCardTable>
      {selectedProducts && selectedProducts.length > 0 ? (
        <div>
          <TopTable>
            <p>Product</p>
            <p>Unit Price</p>
            <p>Quantity</p>
            <p>Row Total</p>
          </TopTable>
          {selectedProducts.map(({ name, price, quantity, id }) => (
            <DataOfProducts key={id}>
              <p>{name}</p>
              <p>{price} ₴</p>
              <p> {quantity} </p>
              <p>{price * quantity} ₴</p>
              <DeleteIcon
                src={Delete}
                alt="delete"
                onClick={() => deleteProduct(id)}
              />
            </DataOfProducts>
          ))}
          <h3>
            {" "}
            <Subtotal>Subtotal:</Subtotal> {subTotal} ₴
          </h3>
        </div>
      ) : (
        <EmptyCart>Your shopping cart is empty</EmptyCart>
      )}
    </WidthCardTable>
  );
};

export default Orders;
