import axios from "axios";
import { API_URL, TOKEN } from "constants/constants";
import { setUrlParams } from "helper/setUrlParams";

export default async (options) => {
  const urlParams = setUrlParams(options);
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
