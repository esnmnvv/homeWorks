import axios from "axios";

export const getProducts = async () => {
  try {
    const { data } = await axios.get("https://api.escuelajs.co/api/v1/products");
    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Не удалось загрузить товары",
      { cause: error }
    );
  }
};
