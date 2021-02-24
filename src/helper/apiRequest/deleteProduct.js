import axios from "axios";
import { API_URL, TOKEN } from "constants/constants";
import { myProductsActions } from "redux/myProductList/actions";

export const deleteProduct = async (productId, dispatch) => {
  try {
    const response = await axios(`${API_URL}/products/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: TOKEN,
      },
    });
    dispatch(myProductsActions.deleteMyProduct({ productId }));
    return response;
  } catch (e) {
    console.log("error", e.message);
  }
};
