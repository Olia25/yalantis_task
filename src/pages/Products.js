import React, { useState, useMemo } from "react";
import {
  SearchLine,
  Input,
  Container,
  LayoutWithSidebar,
  SearchSorting,
  SelectStyle,
} from "styledComponents";
import useProducts from "helper/apiRequest/useProducts";
import { API_URL } from "constants/constants";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "components/productList/ProductList";
import { setPriceFilter } from "redux/priceFilter/filterAllProd/selectors";
import { getProducts } from "redux/productList/selectors";
import { cartActions } from "redux/cart/actions";
import { setUrlParams } from "helper/setUrlParams";
import { sortProducts } from "helper/sortProducts";
import { filterProducts } from "helper/filterProducts";
import FilterProducts from "components/filterProducts/FilterProducts";
import { filterOrigAllProd } from "redux/originsFiltering/filterAllProd/selectors";
import { originsFActions } from "redux/originsFiltering/filterAllProd/actions";
import { priceActions } from "redux/priceFilter/filterAllProd/actions";

const Home = () => {
  const [text, setText] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const dispatch = useDispatch();
  const prices = useSelector(setPriceFilter);
  const getOrigins = useSelector(filterOrigAllProd);

  const urlParams = useMemo(
    () => setUrlParams(getOrigins, prices.min, prices.max),
    [getOrigins, prices]
  );
  useProducts(urlParams);
  const value = useSelector(getProducts);

  const products = useMemo(() => sortProducts(value, selectedValue), [
    value.data,
    selectedValue,
  ]);

  const filteredProducts = filterProducts(products, text);

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
          <FilterProducts
            filteredOrigins={getOrigins}
            actionOrig={originsFActions.getOrigins}
            actionPrice={priceActions.changeMinMaxPrice}
          />
        </div>
        <div>
          <Container>
            {filteredProducts.map((product) => (
              <ProductList
                key={product.id}
                product={product}
                action={() => dispatch(cartActions.addProducts(product))}
                title="Add to cart"
              />
            ))}
          </Container>
        </div>
      </LayoutWithSidebar>
    </>
  );
};

export default Home;
