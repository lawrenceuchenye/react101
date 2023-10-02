import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const data_res = await fetch(url);
    const data_json = await data_res.json();
    setData(data_json);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { loading, data };
};
