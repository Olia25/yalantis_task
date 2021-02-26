import axios from "axios";
import { TOKEN, API_URL } from "constants/constants";

export default async (urlParams) => {
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
