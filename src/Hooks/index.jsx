import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(false);

  const getData = async () => {
    const data_res = await fetch(url);
    const data_json = await data_res.json();
    setData(data_json);
    console.log(data_json);
    console.log("######");
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, data };
};
