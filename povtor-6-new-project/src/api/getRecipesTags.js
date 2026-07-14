import axios from "axios";

export const getRecipesTags = async () => {
  const response = await axios.get("https://dummyjson.com/recipes/tags");

  return response.data;
};
