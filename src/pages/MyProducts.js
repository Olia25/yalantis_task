import { useEffect } from "react";
import {
  Container,
  Input,
  LayoutWithSidebar,
  SearchLine,
  SearchSorting,
  SelectStyle,
} from "styledComponents";
import FilterProducts from "components/filterProducts/FilterProducts";
import ProductList from "components/productList/ProductList";
import React, { useState, useMemo } from "react";
import { PER_PAGE } from "constants/constants";
import { useSelector, useDispatch } from "react-redux";
import { getMyProducts, getPage } from "redux/myProductList/selectors";
import { uiActions } from "redux/ui/actions";
import { selectUpdateOpenModal, selectUpdateProduct } from "redux/ui/selectors";
import Form from "components/form/Form";
import Modal from "components/modal/Modal";
import { sortProducts } from "helper/sortProducts";
import { filterProducts } from "helper/filterProducts";
import { filterOrigMyProd } from "redux/originsFiltering/filterMyProd/selectors";
import { originsFMyProdActions } from "redux/originsFiltering/filterMyProd/actions";
import { priceMyProdActions } from "redux/priceFilter/filterMyProd/actions";
import { myProductsActions } from "redux/myProductList/actions";
import Pagination from "components/pagination/Pagination";
import {
  getMaxPrice,
  getMinPrice,
} from "redux/priceFilter/filterMyProd/selectors";

const MyProducts = () => {
  const [text, setText] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const dispatch = useDispatch();
  const getOrigins = useSelector(filterOrigMyProd);
  const selectProd = useSelector(selectUpdateProduct);
  const openModal = useSelector(selectUpdateOpenModal);
  const value = useSelector(getMyProducts);
  const totalItems = value.totalItems;
  const page = useSelector(getPage);
  const minPrice = useSelector(getMinPrice);
  const maxPrice = useSelector(getMaxPrice);

  useEffect(() => dispatch(myProductsActions.fetch()), [
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
    dispatch(myProductsActions.setPage(event.selected + 1));

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
            actionOrig={originsFMyProdActions.getOriginsMP}
            actionPrice={priceMyProdActions.changeMinMaxPrice}
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
                title="Update"
                action={() => dispatch(uiActions.updateModal.open(product))}
                openModal={openModal}
              />
            ))}
            {openModal && (
              <Modal
                title="Update Product"
                action={() => dispatch(uiActions.updateModal.close())}
              >
                <Form
                  titleButton="Update"
                  initialValues={{
                    name: selectProd.name,
                    price: selectProd.price,
                    origin: selectProd.origin,
                  }}
                  closeModal={uiActions.updateModal.close()}
                  productId={selectProd.id}
                  formFunc={(value, productId) =>
                    dispatch(
                      myProductsActions.updateRequest({ value, productId })
                    )
                  }
                />
              </Modal>
            )}
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
export default MyProducts;
