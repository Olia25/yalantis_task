import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { myProductsActions } from "redux/myProductList/actions";
import {TOKEN} from "constants/constants";


const useProducts = (url) => {
  const dispatch = useDispatch();
  const getProducts = async (url) => {
    dispatch(myProductsActions.start());
    try {
      const response = await axios(`${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: TOKEN,
        },
      });
      dispatch(myProductsActions.success(response.data.items));
    } catch (e) {
      console.log(e);
      dispatch(myProductsActions.error(e.message));
    }
  };
  useEffect(() => {
    getProducts(url);
  }, [url]);
};

export default useProducts;
