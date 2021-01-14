import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "constants/constants";
import ProductContext from "context";
import { ProductDescription, NameOfProduct, Button } from "../styledComponents";
import { addProduct } from "utils";
import useData from "hooks/useData";

const SelectedProduct = () => {
  const { productId } = useParams();
  const product = useData(`${API_URL}/products/${productId}`);
  const { selectedProducts, setSelectedProducts } = useContext(ProductContext);

  return (
    <>
      {product && (
        <ProductDescription>
          <NameOfProduct>{product.name}</NameOfProduct>
          <h2>Price: {product.price} ₴</h2>
          <p>{product.origin}</p>
          <Button
            onClick={() =>
              addProduct(
                selectedProducts,
                setSelectedProducts,
                product.id,
                product
              )
            }
          >
            Add to cart
          </Button>
        </ProductDescription>
      )}
    </>
  );
};

export default SelectedProduct;
