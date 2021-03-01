import axios from "axios";
import { TOKEN, API_URL } from "constants/constants";
import { setUrlParams } from "helper/setUrlParams";

export default async (options) => {
  const urlParams = setUrlParams(options);
  try {
    const response = await axios(
      `${API_URL}/products?${urlParams}&editable=true`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: TOKEN,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }
};
