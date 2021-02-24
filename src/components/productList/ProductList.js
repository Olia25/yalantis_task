import React from "react";
import {
  Button,
  CoverOfProducts,
  DeleteIcon,
  StyledLink,
  MyProductsDelete,
} from "styledComponents";
import Delete from "assets/icons/deleteIcon.png";
import { useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "helper/apiRequest/deleteProduct";
import moment from "moment";

const ProductList = ({ product, title, action }) => {
  const matchMyProducts = useRouteMatch("/myProducts");
  const dispatch = useDispatch();

  return (
    <CoverOfProducts>
      {matchMyProducts && (
        <div>
          <DeleteIcon
            src={Delete}
            onClick={() => deleteProduct(product.id, dispatch)}
          />
        </div>
      )}
      <StyledLink to={`/products/${product.id}`}>
        <div>
          <MyProductsDelete>
            <h4>{product.name}</h4>
          </MyProductsDelete>
          <h5>Created At: {moment(product.createdAt).format("DD.MM.YY")}</h5>
          <p>{product.origin.toUpperCase()}</p>
          <h2>{product.price} ₴</h2>
        </div>
      </StyledLink>

      <Button onClick={action}>{title}</Button>
    </CoverOfProducts>
  );
};

export default ProductList;
