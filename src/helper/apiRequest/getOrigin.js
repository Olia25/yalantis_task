import axios from "axios";
import { API_URL } from "constants/constants";

export default async () => {
  try {
    const response = await axios(`${API_URL}/products-origins`, {
      method: "GET",
    });
    return response.data.items;
  } catch (e) {
    console.log("error", e.message);
    throw new Error(e.message);
  }
};
