import axios from "axios";

export const postRecipe = async (data) => {
  const response = await axios.post("https://dummyjson.com/recipes/add", data);
  return response;
};
