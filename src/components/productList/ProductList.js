import React from "react";
import { Button, CoverOfProducts, StyledLink } from "styledComponents";
import { useDispatch } from "react-redux";

const ProductList = ({ product, title, action }) => {
  // const OpenModal = useSelector(selectUpdateOpenModal);
  //
  // console.log(OpenModal);

  return (
    <CoverOfProducts>
      <StyledLink to={`/products/${product.id}`}>
        <div>
          <h4>{product.name}</h4>
          <p>{product.origin.toUpperCase()}</p>
          <h2>{product.price} ₴</h2>
        </div>
      </StyledLink>
      <Button onClick={action}>{title}</Button>
    </CoverOfProducts>
  );
};

export default ProductList;
