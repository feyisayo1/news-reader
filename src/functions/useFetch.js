import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // const getData = async (url) => {
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     const responce = await axios.get(url, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     console.dir(responce);

  //     setData(responce.data.articles);
  //   } catch (err) {
  //     setError(err.message || "An Error Occurred while fetching data");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   const getData = async (url) => {
  //     setIsLoading(true);
  //     setError(null);

  //     try {
  //       const responce = await axios.get(url, {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       console.dir(responce);

  //       setData(responce.data.articles);
  //     } catch (err) {
  //       setError(err.message || "An Error Occurred while fetching data");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   getData();
  // }, [url]);

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setData(response.data.articles);
      })
      .catch((error) => {
        setError(error.message || "An Error Occurred while fetching data");
      })
      .finally(setIsLoading(false));
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
