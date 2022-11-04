import { useQuery } from "react-query";
import { useEffect, useState } from "react";

const API_BASE_URL = "https://api.artic.edu/api/v1";

const endpoints = {
  artworks: async ({ page, limit }) => {
    const response = await fetch(
      `${API_BASE_URL}/artworks?page=${page}&limit=${limit}`
    );

    return response.json();
  },
  artworkById: async ({ id }) => {
    console.log("object", id);
    const response = await fetch(`${API_BASE_URL}/artworks/${id}`);

    return response.json();
  }
};

function useFetch({ endpoint, options }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const fetching = async () => {
    try {
      setLoading(true);
      const response = endpoints[endpoint](options);
      const data = await response;
      setData(data.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetching();
  }, [options.page]);

  return { isLoading, data, error };
}

export default useFetch;
