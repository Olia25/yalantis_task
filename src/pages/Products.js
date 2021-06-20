import React, { useState, useMemo, useEffect } from "react";
import {
  SearchLine,
  Input,
  Container,
  LayoutWithSidebar,
  SearchSorting,
  SelectStyle,
} from "styledComponents";
import { PER_PAGE } from "constants/constants";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "components/productList/ProductList";
import {
  getMinPrice,
  getMaxPrice,
} from "redux/priceFilter/filterAllProd/selectors";
import { getProducts, getPage } from "redux/productList/selectors";
import { cartActions } from "redux/cart/actions";
import { sortProducts } from "helper/sortProducts";
import { filterProducts } from "helper/filterProducts";
import FilterProducts from "components/filterProducts/FilterProducts";
import { filterOrigAllProd } from "redux/originsFiltering/filterAllProd/selectors";
import { originsFActions } from "redux/originsFiltering/filterAllProd/actions";
import { priceActions } from "redux/priceFilter/filterAllProd/actions";
import { productsActions } from "redux/productList/actions";
import Pagination from "components/pagination/Pagination";

import { useLocation, useHistory } from "react-router-dom";

const Home = () => {
  const [text, setText] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const dispatch = useDispatch();
  const getOrigins = useSelector(filterOrigAllProd);
  const value = useSelector(getProducts);
  const page = useSelector(getPage);
  const totalItems = value.totalItems;
  const minPrice = useSelector(getMinPrice);
  const maxPrice = useSelector(getMaxPrice);

  let location = useLocation();
  // let history = useHistory();

  console.log("location", location, "--------", location.search);

  useEffect(() => dispatch(productsActions.fetch(history)), [
    getOrigins,
    minPrice,
    maxPrice,
    page,
    PER_PAGE,
  ]);

  const products = useMemo(() => sortProducts(value, selectedValue), [
    value.data,
    selectedValue,
  ]);

  const filteredProducts = filterProducts(products, text);

  const setPage = (event) =>
    dispatch(productsActions.setPage(event.selected + 1));

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
            min={minPrice}
            max={maxPrice}
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
      <Pagination
        selectedPage={Number(page)}
        pageCount={Math.ceil(totalItems / PER_PAGE)}
        setPage={setPage}
      />
    </>
  );
};

export default Home;
