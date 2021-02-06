import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { originsActions } from "redux/origins/actions";

const useOrigin = (url) => {
  const dispatch = useDispatch();
  const fetchData = async (requestUrl) => {
    dispatch(originsActions.start());
    try {
      const response = await axios.get(requestUrl);
      dispatch(originsActions.success(response.data.items));
    } catch (e) {
      console.log("error", e.message);
      dispatch(originsActions.error(e.message));
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);
};

export default useOrigin;
