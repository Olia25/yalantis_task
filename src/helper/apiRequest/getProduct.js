import axios from "axios";
import { API_URL } from "constants/constants";

export default async (requestUrlByID) => {
  try {
    const response = await axios(`${API_URL}/products/${requestUrlByID}`, {
      method: "GET",
    });
    return response.data;
  } catch (e) {
    console.log("error", e.message);
    throw new Error(e.message);
  }
};
