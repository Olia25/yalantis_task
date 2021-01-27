import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { productActions } from "redux/productInfo/actions";

const useProduct = (url) => {
  const dispatch = useDispatch();

  const fetchData = async (requestUrlByID) => {
    dispatch(productActions.start());
    try {
      const response = await axios.get(requestUrlByID);
      dispatch(productActions.success(response.data));
    } catch (e) {
      console.log("error", e.message);
      dispatch(productActions.error(e.message));
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);
};

export default useProduct;
