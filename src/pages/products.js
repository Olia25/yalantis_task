import React, { useState, useMemo } from "react";
import {
  SearchLine,
  Input,
  Container,
  LayoutWithSidebar,
  SearchSorting,
  SelectStyle,
} from "styledComponents";
import useProducts from "helper/useProducts";
import { API_URL } from "constants/constants";
import { useSelector } from "react-redux";
import ProductList from "components/productList/ProductList";
import Filter from "components/productList/Filter";

const Home = () => {
  const [text, setText] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const prices = useSelector((state) => state.priceFilter);
  const origins = useSelector((state) => state.origins);

  const urlParams = useMemo(() => {
    const params = new URLSearchParams();
    if (origins.length > 0) {
      params.set("origins", origins);
    }
    if (prices.min) {
      params.set("minPrice", prices.min);
    }
    if (prices.max) {
      params.set("maxPrice", prices.max);
    }
    return params.toString();
  }, [origins, prices]);

  useProducts(`${API_URL}/products?${urlParams}`);

  const value = useSelector((state) => state.productList);

  const products = useMemo(() => {
    const sortedProducts = [...value.data];
    if (selectedValue === "asc") {
      return sortedProducts.sort((a, b) => a.price - b.price);
    }
    if (selectedValue === "desc") {
      return sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
  }, [value.data, selectedValue]);

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
      <SearchSorting>
        <SelectStyle onChange={(e) => setSelectedValue(e.target.value)}>
          <option value={null}>Sort By</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </SelectStyle>
      </SearchSorting>
      <LayoutWithSidebar>
        <div>
          <Filter origins={origins} />
        </div>
        <div>
          <Container>
            {filteredProduct.map((product) => (
              <ProductList key={product.id} product={product} />
            ))}
          </Container>
        </div>
      </LayoutWithSidebar>
    </>
  );
};

export default Home;
