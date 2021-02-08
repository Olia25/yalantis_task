import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { originsActions } from "redux/origins/actions";
import { API_URL } from "constants/constants";

const useOrigin = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    dispatch(originsActions.start());
    try {
      const response = await axios(`${API_URL}/products-origins`, {
        method: "GET",
      });
      dispatch(originsActions.success(response.data.items));
    } catch (e) {
      console.log("error", e.message);
      dispatch(originsActions.error(e.message));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useOrigin;
