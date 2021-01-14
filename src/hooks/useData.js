import React, { useState, useEffect } from "react";
import axios from "axios";

const useData = (url) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (e) {
      console.log("error", e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useData;
