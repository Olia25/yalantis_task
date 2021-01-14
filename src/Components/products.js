import React, { useState, useContext } from "react";
import ProductContext from "../context";
import {
  SearchLine,
  Input,
  Container,
  CoverOfProducts,
  Button,
  StyledLink,
} from "styledComponents";
import { addProduct } from "utils";
import useData from "../hooks/useData";
import { API_URL } from "constants/constants";

const Home = () => {
  const [text, setText] = useState("");
  const { selectedProducts, setSelectedProducts } = useContext(ProductContext);
  const data = useData(`${API_URL}/products`);
  const products = data?.items || [];
  const filteredProduct = products.filter((elem) =>
    elem.name.toUpperCase().includes(text.toLocaleUpperCase())
  );

  return (
    <>
      <SearchLine>
        <Input
          className="input"
          placeholder="product search"
          value={text}
          onChange={({ target: { value } }) => setText(value)}
        />
      </SearchLine>
      <Container>
        {filteredProduct.map((elem) => (
          <CoverOfProducts key={elem.id}>
            <StyledLink to={`/products/${elem.id}`}>
              <div>
                <h4>{elem.name}</h4>
                <h2>{elem.price} ₴</h2>
              </div>
            </StyledLink>
            <Button
              onClick={() =>
                addProduct(selectedProducts, setSelectedProducts, elem.id, elem)
              }
            >
              Add to cart
            </Button>
          </CoverOfProducts>
        ))}
      </Container>
    </>
  );
};

export default Home;
