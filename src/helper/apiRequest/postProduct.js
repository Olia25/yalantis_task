import axios from "axios";
import { API_URL, TOKEN } from "constants/constants";

export const postProduct = async (obj) => {
  try {
    const response = await axios(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: TOKEN,
      },
      data: {
        product: {
          name: obj.name,
          price: Number(obj.price),
          origin: obj.origin,
        },
      },
    });
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response;
  } catch (e) {
    console.log("error", e.message);
  }
};
