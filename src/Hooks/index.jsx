import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(url);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    const data_res = await fetch(url);
    const data_json = await data_res.json();
    setData(data_json);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, data };
};
