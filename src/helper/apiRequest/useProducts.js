import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { productsActions } from "redux/productList/actions";
import { TOKEN, API_URL } from "constants/constants";

const useProducts = (urlParams) => {
  const dispatch = useDispatch();
  const getProducts = async (urlPar) => {
    dispatch(productsActions.start());
    try {
      const response = await axios(`${API_URL}/products?${urlPar}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: TOKEN,
        },
      });
      dispatch(productsActions.success(response.data));
    } catch (e) {
      console.log(e);
      dispatch(productsActions.error(e.message));
    }
  };
  useEffect(() => {
    getProducts(urlParams);
  }, [urlParams]);
};

export default useProducts;
