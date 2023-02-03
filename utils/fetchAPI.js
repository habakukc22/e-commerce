import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "555fb72724msh9c4634569a6a2d8p14abf0jsn2099ba540979",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
