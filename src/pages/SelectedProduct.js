import React from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "constants/constants";
import { ProductDescription, NameOfProduct, Button } from "styledComponents";
import useProduct from "helper/apiRequest/useProduct";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "redux/cart/actions";

const SelectedProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  useProduct(productId);
  const value = useSelector((state) => state.productInfo);
  const product = value.data;

  return (
    <>
      {product && (
        <ProductDescription>
          <NameOfProduct>{product.name}</NameOfProduct>
          <h2>Price: {product.price} ₴</h2>
          <p>{product.origin}</p>
          <Button onClick={() => dispatch(cartActions.addProducts(product))}>
            Add to cart
          </Button>
        </ProductDescription>
      )}
    </>
  );
};

export default SelectedProduct;
