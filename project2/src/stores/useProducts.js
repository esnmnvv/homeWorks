import axios from "axios";
import { create } from "zustand";

export const useProducts = create((set, get) => ({
  productList: [],
  addProduct: (product) =>
    set(() => ({ productList: [...get().productList, product] })),
  createProduct: async (product) => {
    axios.post("https://api.escuelajs.co/api/v1/products", product);
  },
  deleteProduct: (id) =>
    set({
      productList: get().productList.filter((product) => product.id !== id),
    }),
}));
