import axios from "axios";
import { API_URL, TOKEN } from "constants/constants";

export const patchProduct = async (obj, id) => {
  try {
    await axios(`${API_URL}/products/${id}`, {
      method: "PATCH",
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
  } catch (e) {
    console.log("error", e.message);
    throw new Error(e);
  }
};
