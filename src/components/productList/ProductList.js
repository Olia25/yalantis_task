import React from "react";
import { Button, CoverOfProducts, StyledLink } from "styledComponents";
import { cartActions } from "redux/cart/actions";
import { useDispatch } from "react-redux";

const ProductList = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <CoverOfProducts>
      <StyledLink to={`/products/${product.id}`}>
        <div>
          <h4>{product.name}</h4>
          <p>{product.origin.toUpperCase()}</p>
          <h2>{product.price} ₴</h2>
        </div>
      </StyledLink>
      <Button onClick={() => dispatch(cartActions.addProducts(product))}>
        Add to cart
      </Button>
    </CoverOfProducts>
  );
};

export default ProductList;
