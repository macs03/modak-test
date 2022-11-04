import { useQuery } from "react-query";

const API_BASE_URL = "https://api.artic.edu/api/v1";

const endpoints = {
  artworks: async ({ page, limit }) => {
    const data = await (
      await fetch(`${API_BASE_URL}/artworks?page=${page}&limit=${limit}`)
    ).json();

    return data;
  },
  artworkById: async ({ id }) => {
    console.log("object", id);
    const data = await (await fetch(`${API_BASE_URL}/artworks/${id}`)).json();

    return data;
  }
};

function useFetch({ endpoint, options }) {
  return useQuery([endpoint], () => endpoints[endpoint](options));
}

export default useFetch;
