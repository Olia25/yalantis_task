import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { myProductsActions } from "redux/myProductList/actions";
import { TOKEN, API_URL } from "constants/constants";

const useProducts = (urlParams) => {
  const dispatch = useDispatch();
  const getProducts = async (urlParam) => {
    dispatch(myProductsActions.start());
    try {
      const response = await axios(
        `${API_URL}/products?${urlParam}&editable=true`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: TOKEN,
          },
        }
      );
      dispatch(myProductsActions.success(response.data.items));
    } catch (e) {
      console.log(e);
      dispatch(myProductsActions.error(e.message));
    }
  };
  useEffect(() => {
    getProducts(urlParams);
  }, [urlParams]);
};

export default useProducts;
