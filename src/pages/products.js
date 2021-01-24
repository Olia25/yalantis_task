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
  const [origins, setOrigins] = useState([]);
  const [priceFiltering, setPriceFiltering] = useState({});
  const [selectedValue, setSelectedValue] = useState(null);

  useProducts(
    `${API_URL}/products?origins=${origins.map((e) => e)}&minPrice=${
      priceFiltering.minPrice
    }&maxPrice=${priceFiltering.maxPrice}`
  );

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
          <Filter
            origins={origins}
            setOrigins={setOrigins}
            setPriceFiltering={setPriceFiltering}
          />
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
