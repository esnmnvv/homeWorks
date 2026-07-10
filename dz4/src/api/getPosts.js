import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get("https://dummyjson.com/posts");
  return response.data.posts;
};
