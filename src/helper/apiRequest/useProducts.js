import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { productsActions } from "redux/productList/actions";
import { TOKEN } from "constants/constants";

const useProducts = (url) => {
  const dispatch = useDispatch();
  const getProducts = async (url) => {
    dispatch(productsActions.start());
    try {
      const response = await axios(`${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: TOKEN,
        },
      });
      dispatch(productsActions.success(response.data.items));
    } catch (e) {
      console.log(e);
      dispatch(productsActions.error(e.message));
    }
  };
  useEffect(() => {
    getProducts(url);
  }, [url]);
};

export default useProducts;
