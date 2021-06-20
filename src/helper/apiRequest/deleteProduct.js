import axios from "axios";
import { API_URL, TOKEN } from "constants/constants";

export const deleteProduct = async (productId) => {
  try {
    await axios(`${API_URL}/products/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: TOKEN,
      },
    });
  } catch (e) {
    console.log("error", e.message);
  }
};
