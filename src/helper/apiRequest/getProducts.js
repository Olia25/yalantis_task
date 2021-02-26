import axios from "axios";
import { API_URL, TOKEN } from "constants/constants";

export default async (urlParams) => {
  try {
    const response = await axios(`${API_URL}/products?${urlParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: TOKEN,
      },
    });
    return response.data;
  } catch (e) {
    console.log("error", e.message);
    throw new Error(e.message);
  }
};
