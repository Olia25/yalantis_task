import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { productsActions } from "redux/productList/actions";

const useProducts = (url) => {
  const dispatch = useDispatch();

  const fetchData = async (requestUrl) => {
    dispatch(productsActions.start());
    try {
      const response = await axios.get(requestUrl);
      dispatch(productsActions.success(response.data.items));
    } catch (e) {
      console.log("error", e.message);
      dispatch(productsActions.error(e.message));
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);
};

export default useProducts;
