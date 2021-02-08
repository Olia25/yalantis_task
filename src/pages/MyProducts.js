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
import useMyProducts from "helper/apiRequest/useMyProducts";
import { API_URL } from "constants/constants";
import { useSelector, useDispatch } from "react-redux";
import { setPriceFilterMyProd } from "redux/priceFilter/filterMyProd/selectors";
import { getMyProducts } from "redux/myProductList/selectors";
import { uiActions } from "redux/ui/actions";
import { selectUpdateOpenModal, selectUpdateProduct } from "redux/ui/selectors";
import Form from "components/form/Form";
import Modal from "components/modal/Modal";
import { setUrlParams } from "helper/setUrlParams";
import { sortProducts } from "helper/sortProducts";
import { filterProducts } from "helper/filterProducts";
import { patchProduct } from "helper/apiRequest/patchProduct";
import { filterOrigMyProd } from "redux/originsFiltering/filterMyProd/selectors";
import { originsFMyProdActions } from "redux/originsFiltering/filterMyProd/actions";
import { priceMyProdActions } from "redux/priceFilter/filterMyProd/actions";

const MyProducts = () => {
  const [text, setText] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const dispatch = useDispatch();
  const prices = useSelector(setPriceFilterMyProd);
  const getOrigins = useSelector(filterOrigMyProd);
  const selectProd = useSelector(selectUpdateProduct);
  const openModal = useSelector(selectUpdateOpenModal);

  const urlParams = useMemo(
    () => setUrlParams(getOrigins, prices.min, prices.max),
    [getOrigins, prices]
  );

  useMyProducts(urlParams);
  const value = useSelector(getMyProducts);

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
            actionOrig={originsFMyProdActions.getOriginsMP}
            actionPrice={priceMyProdActions.changeMinMaxPrice}
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
                  formFunc={patchProduct}
                />
              </Modal>
            )}
          </Container>
        </div>
      </LayoutWithSidebar>
    </>
  );
};
export default MyProducts;
