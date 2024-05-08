import Axios from "axios";
import React, { useEffect, useState } from "react";

Axios.defaults.baseURL = 'https://opentdb.com/'

export const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
        Axios.get(url)
             .then(res => setResponse(res))
             .catch(err => setError(err))
             .finally(() => setLoading(false))
    }
    fetchData()
  }, [url])

  return { response, error, loading };
};
