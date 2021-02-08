import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { productActions } from "redux/productInfo/actions";
import { API_URL } from "constants/constants";

const useProduct = (requestUrlID) => {
  const dispatch = useDispatch();

  const fetchData = async (requestUrlByID) => {
    dispatch(productActions.start());
    try {
      const response = await axios.get(`${API_URL}/products/${requestUrlByID}`);
      dispatch(productActions.success(response.data));
    } catch (e) {
      console.log("error", e.message);
      dispatch(productActions.error(e.message));
    }
  };

  useEffect(() => {
    fetchData(requestUrlID);
  }, [requestUrlID]);
};

export default useProduct;
